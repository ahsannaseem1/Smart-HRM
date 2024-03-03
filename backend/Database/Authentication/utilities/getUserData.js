const { MongoClient } = require("mongodb");
const { connectToMongoDB, closeMongoDBConnection } = require("../../connectDB");

async function getUserData(userType, organizationId) {
  try {
    const db = await connectToMongoDB();

    const orgCollection = db.collection(userType);
    const orgUsers = await orgCollection
      .find({ organizationId: organizationId })
      .toArray();
    return orgUsers;
  } catch (error) {
    console.error(error);
    return error;
  } finally {
    await closeMongoDBConnection();
  }
}

module.exports = {
  getUserData,
};
