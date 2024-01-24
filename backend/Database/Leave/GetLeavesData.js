const { MongoClient } = require("mongodb");
require("dotenv").config();

const dbUri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function findEmployeesWithPendingLeaveRequests(organizationId) {
    const uri = dbUri;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName); 
        const employeesCollection = database.collection("Employees");

        const employees = await employeesCollection.find({ organizationId }).toArray();

        const employeesWithPendingLeaveRequests = employees.filter(employee => {
            return employee.leaveRequest && employee.leaveRequest.some(request => request.status === "pending");
        });

        const employeesWithOnlyPendingLeaveRequests = employeesWithPendingLeaveRequests.filter(employee => {
            return employee.leaveRequest.every(request => request.status !== "approved");
        });

        const filteredEmployees = employeesWithOnlyPendingLeaveRequests.map(employee => {
            return {
                ...employee,
                leaveRequest: employee.leaveRequest.filter(request => request.status !== "Approved")
            };
        });

        return filteredEmployees;
    } finally {
        await client.close();
    }
}
module.exports={
    findEmployeesWithPendingLeaveRequests
}