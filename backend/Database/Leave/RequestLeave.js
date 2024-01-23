const { MongoClient } = require('mongodb');
require('dotenv').config();

const dbUri=process.env.DB_URI;
const dbName=process.env.DB_NAME;
async function requestLeave(employeeId, leaveDays, leaveType, reason) {
    const uri = dbUri;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName);
        const employeeCollection = database.collection('employee');

        const leave = {
            leaveDays,
            leaveType,
            reason,
            status: 'pending'
        };

        await employeeCollection.updateOne(
            { _id: employeeId },
            { $push: { leaves: leave } }
        );

        console.log('Leave request stored successfully.');
    } catch (error) {
        console.error('Error storing leave request:', error);
    } finally {
        await client.close();
    }
}

// Usage example:
requestLeave('employeeId', 5, 'annual', 'Vacation');
