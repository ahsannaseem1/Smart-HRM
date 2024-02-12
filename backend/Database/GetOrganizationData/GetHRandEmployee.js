const { countUniqueDepartments } = require("./countDepartments");
const { countPendingLeaves } = require("../Leave/GetPendingLeavesCount");
const { connectToMongoDB, closeMongoDBConnection } = require("../connectDB");

async function getHrAndEmployee(email, organizationId) {
  try {
    const db = await connectToMongoDB();

    const hrCollection = db.collection("HR");
    const employeeCollection = db.collection("Employees");

    const hrUser = await hrCollection.findOne({ email: email });
    const employeeData = await employeeCollection
      .find({ organizationId: organizationId })
      .toArray();
    const departments = await countUniqueDepartments(organizationId);
    const totalLeavesRequestPending = await countPendingLeaves(organizationId);
    return {
      userType: "HR",
      user: hrUser,
      employeeData: employeeData,
      totalLeavesRequestPending,
      departments,
    };
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  } finally {
    await closeMongoDBConnection();
  }
}
async function getHrAndEmployeeByOrganizationId(organizationId) {
  try {
    const db = await connectToMongoDB();

    const hrCollection = db.collection("HR");
    const employeeCollection = db.collection("Employees");

    const hrUser = await hrCollection.findOne({ organizationId: organizationId });
    const employeeData = await employeeCollection
      .find({ organizationId: organizationId })
      .toArray();
    const departments = await countUniqueDepartments(organizationId);
    const totalLeavesRequestPending = await countPendingLeaves(organizationId);
    
    return {
      userType: "HR",
      user: hrUser,
      employeeData: employeeData,
      totalLeavesRequestPending,
      departments,
    };
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  } finally {
    await closeMongoDBConnection();
  }
}


module.exports = { getHrAndEmployee ,getHrAndEmployeeByOrganizationId};
