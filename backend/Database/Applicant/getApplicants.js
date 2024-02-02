const { MongoClient } = require("mongodb");

const uri = process.env.DB_URI; // Replace with your MongoDB URI
const dbName = process.env.DB_NAME; // Replace with your MongoDB database name

// Define the route to get all applicants
async function GetApplicants(req, res) {
    let mongoClient;
    try {
        mongoClient = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await mongoClient.connect();
        const database = mongoClient.db(dbName);
        const collection = database.collection("Applicants");

        const applicants = await collection.find().toArray();
        return { applicants: applicants, error: null };
    } catch (error) {
        return { applicants: null, error: error.message };
    } finally {
        // Close MongoDB connection after completing the request
        if (mongoClient) {
            await mongoClient.close();
        }
    }
}

module.exports = {
    GetApplicants,
};
