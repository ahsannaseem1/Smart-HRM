const { connectToMongoDB, closeMongoDBConnection } = require("../connectDB");

async function countUniqueDepartments(organizationId) {
  try {
    const db = await connectToMongoDB();
    const employeesCollection = db.collection("Employees");

    const employees = await employeesCollection
      .find({ organizationId })
      .toArray();

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
    const departments = { uniqueDepartmentsArray, uniqueDepartmentsCount };
    return departments;
  } finally {
    await closeMongoDBConnection();
  }
}

module.exports = {
  countUniqueDepartments,
};
