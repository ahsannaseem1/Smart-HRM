const { connectToMongoDB, closeMongoDBConnection } = require("../connectDB");

async function countPendingLeaves(organizationId) {
  try {
    const db = await connectToMongoDB();
    const employeesCollection = db.collection("Employees");

    const employees = await employeesCollection
      .find({ organizationId })
      .toArray();

    const totalPendingLeaves = employees.reduce((count, employee) => {
      if (employee.leaveRequest) {
        const pendingLeaves = employee.leaveRequest.filter(
          (request) => request.status === "pending"
        ).length;
        count += pendingLeaves;
      }
      return count;
    }, 0);

    return totalPendingLeaves;
  } finally {
    await closeMongoDBConnection();
  }
}

module.exports = {
  countPendingLeaves,
};
