const { connectToMongoDB, closeMongoDBConnection } = require("../connectDB");

// Define the route to get all applicants
async function GetApplicants(req, res) {
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

module.exports = {
  GetApplicants,
};
