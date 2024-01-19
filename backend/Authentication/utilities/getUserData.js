const { MongoClient } = require("mongodb");

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function getUserData(userType, organizationId) {
    const client = new MongoClient(uri
        // , { useNewUrlParser: true, useUnifiedTopology: true }
        );

    try {

        await client.connect();
        const db = client.db(dbName);

        const orgCollection = db.collection(userType);
        const orgUsers = await orgCollection.find({ organizationId: organizationId }).toArray();
        return orgUsers;
    } catch (error) {
        console.error(error);
        return error;
    } finally {
        await client.close();
    }
}

module.exports = {
    getUserData
}
