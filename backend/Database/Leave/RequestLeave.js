const { MongoClient } = require('mongodb');
require('dotenv').config();
const { ObjectId } = require('mongodb');


const dbUri=process.env.DB_URI;
const dbName=process.env.DB_NAME;
async function requestLeave(employeeId, leaveDays, leaveType, leaveReason,leaveDate) {
    const uri = dbUri;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName);
        const employeeCollection = database.collection('Employees');

        const leave = {
            leaveDays,
            leaveType,
            leaveReason,
            leaveDate,
            status: 'pending'
        };

        await employeeCollection.updateOne(
            { _id: new ObjectId(employeeId) },
            { $set: { leaves: leave } }
        );
        console.log(employeeCollection);
        return({error:null,message:"Leave request stored successfully"})
    } catch (error) {
        return({error:error,message:null})
    } finally {
        await client.close();
    }
}
module.exports={
    requestLeave
}