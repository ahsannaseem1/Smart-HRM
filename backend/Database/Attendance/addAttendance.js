require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const { ObjectId } = require('mongodb');
const {getHrAndEmployee}=require('../../Database/GetOrganizationData/GetHRandEmployee')

async function addAttendance(hrEmail,organizationId,employeeId, month, checkInTime, checkOutTime, date,attendanceStatus) {
    const uri = process.env.DB_URI;
    const dbName = process.env.DB_NAME;

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(dbName);
        const employeeCollection = db.collection('Employees');

        const attendance = {
            employeeId,
            month,
            checkInTime,
            checkOutTime,
            date,
            attendanceStatus
        };

        const result = await employeeCollection.findOneAndUpdate(
            { _id: new ObjectId(employeeId) },
            { $push: { attendance: attendance } },
            { upsert: true }
        );
        if(result){
            const {userType,user,employeeData,totalLeavesRequestPending,departments}=await getHrAndEmployee(hrEmail,organizationId);
            const data={userType,user,employeeData,totalLeavesRequestPending,departments};
            return({data:data,error:null})
        }
        else{
            result({error:"Error Adding Attendance",data:null});
        }
    } catch (error) {
        console.error('Error adding attendance:', error);
    } finally {
        client.close();
    }
}

module.exports = {addAttendance};