require('dotenv').config();
const { MongoClient } = require('mongodb');
const {countUniqueDepartments}=require('./countDepartments');
const {countPendingLeaves} = require('../Leave/GetPendingLeavesCount');


async function getHrAndEmployee(email, organizationId) {
    const uri = process.env.DB_URI;
    const dbName = process.env.DB_NAME;

    const client = new MongoClient(uri);

    try {
        await client.connect();

        const db = client.db(dbName);

        const hrCollection = db.collection('HR');
        const employeeCollection = db.collection('Employees');

        const hrUser = await hrCollection.findOne({ "email":email });
        const employeeData = await employeeCollection.find({organizationId: organizationId }).toArray();
        const departments=await countUniqueDepartments(organizationId)
        const totalLeavesRequestPending = await countPendingLeaves(organizationId);
        return { userType: "HR", user: hrUser,employeeData:employeeData,totalLeavesRequestPending,departments };

    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        throw error;
    } finally {
        await client.close();
    }
}

module.exports = {getHrAndEmployee};