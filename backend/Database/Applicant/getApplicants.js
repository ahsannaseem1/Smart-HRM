const { connectToMongoDB, closeMongoDBConnection } = require("../connectDB");
const {ObjectId}=require('mongodb');

// Define the route to get all applicants
async function GetApplicants() {
  try {
    const db = await connectToMongoDB();
    const collection = db.collection("Applicants");

    const applicants = await collection.find().toArray();
    return { applicants: applicants, error: null };
  } catch (error) {
    return { applicants: null, error: error.message };
  } finally {
    // Close MongoDB connection after completing the request
    await closeMongoDBConnection();
  }
}

// Define the route to get applicants based on organizationId and jobId
async function GetApplicantsByOrgAndJob(organizationId,jobId) {

  try {
    const db = await connectToMongoDB();
    const collection = db.collection("Applicants");

    const applicants = await collection.find({
      orgId: organizationId,
      jobId: jobId,
    }).toArray();

    return { applicants: applicants, error: null };
  } catch (error) {
    return { applicants: null, error: error.message };
  } finally {
    // Close MongoDB connection after completing the request
    await closeMongoDBConnection();
  }
}

module.exports = {
  GetApplicants,
  GetApplicantsByOrgAndJob,
};
