const { MongoClient } = require("mongodb");
require("dotenv").config();

const dbUri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function countUniqueDepartments(organizationId) {
    const uri = dbUri;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName); 
        const employeesCollection = database.collection("Employees");

        const employees = await employeesCollection.find({ organizationId }).toArray();

        // Use a Set to store unique department names
        const uniqueDepartments = new Set();

        employees.forEach((employee) => {
            if (employee.department) {
                // Add the department to the set
                uniqueDepartments.add(employee.department);
            }
        });

        // Convert the set to an array if needed
        const uniqueDepartmentsArray = [...uniqueDepartments];
        console.log(uniqueDepartmentsArray);

        // Count the number of unique departments
        const uniqueDepartmentsCount = uniqueDepartmentsArray.length;
        const departments={uniqueDepartmentsArray,uniqueDepartmentsCount}
        return departments;
    } finally {
        await client.close();
    }
}

module.exports = {
    countUniqueDepartments
};
