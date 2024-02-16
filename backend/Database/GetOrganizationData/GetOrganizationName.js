const { ObjectId } = require("mongodb");
const { connectToMongoDB, closeMongoDBConnection } = require("../connectDB");

async function getOrganizationName(organizationId) {
  try {
    const db = await connectToMongoDB();

    const orgCollection = db.collection("Organizations");
    const organization = await orgCollection.findOne({
      _id: new ObjectId(organizationId),
    });
    return organization ? organization.name : null;
  } catch (error) {
    console.error(error);
    return error;
  } finally {
    await closeMongoDBConnection();
  }
}

module.exports = {
  getOrganizationName,
};
