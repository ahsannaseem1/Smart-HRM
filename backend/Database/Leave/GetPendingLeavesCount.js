const { MongoClient } = require("mongodb");
require("dotenv").config();

const dbUri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function countPendingLeaves(organizationId) {
    const uri = dbUri;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName); 
        const employeesCollection = database.collection("Employees");

        const employees = await employeesCollection.find({ organizationId }).toArray();

        const totalPendingLeaves = employees.reduce((count, employee) => {
            if (employee.leaveRequest) {
                const pendingLeaves = employee.leaveRequest.filter(request => request.status === "pending").length;
                count += pendingLeaves;
            }
            return count;
        }, 0);

        return totalPendingLeaves;
    } finally {
        await client.close();
    }
}

module.exports = {
    countPendingLeaves
};