const { MongoClient } = require('mongodb');
require('dotenv').config();
const { ObjectId } = require('mongodb');

const dbUri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function requestLeave(employeeId, leaveDays, leaveType, leaveReason, leaveDate) {
    const uri = dbUri;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName);
        const employeeCollection = database.collection('Employees');

        const leaveId = new ObjectId(); // Generate a new ObjectId for the leave request
        const leave = {
            _id: leaveId,
            leaveDays,
            leaveType,
            leaveReason,
            leaveDate,
            status: 'pending'
        };

        await employeeCollection.updateOne(
            { _id: new ObjectId(employeeId) },
            { $push: { leaveRequest: leave } }
        );

        return { error: null, message: "Leave request stored successfully", leaveId: leaveId.toHexString() };
    } catch (error) {
        return { error: error, message: null, leaveId: null };
    } finally {
        await client.close();
    }
}

module.exports = {
    requestLeave
};
