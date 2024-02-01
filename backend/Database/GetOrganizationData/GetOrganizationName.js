const { MongoClient } = require("mongodb");
const { ObjectId } = require('mongodb');

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function getOrganizationName(organizationId) {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(dbName);

        const orgCollection = db.collection("Organizations");
        const organization = await orgCollection.findOne({ _id: new ObjectId(organizationId) });
        return organization ? organization.name : null;
    } catch (error) {
        console.error(error);
        return error;
    } finally {
        await client.close();
    }
}

module.exports = {
    getOrganizationName
}
