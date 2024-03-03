require('dotenv').config();

const { MongoClient } = require('mongodb');

let client; // Declare the client variable at the module level

async function connectToMongoDB() {
    try {
        const uri = process.env.DB_URI;
        const dbName = process.env.DB_NAME;

        client = new MongoClient(uri);

        await client.connect();

        const db = client.db(dbName);

        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}

async function closeMongoDBConnection() {
    try {
        if (client) {
            await client.close();
        } else {
            console.log('No MongoDB connection to close');
        }
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
    }
}

module.exports = { connectToMongoDB, closeMongoDBConnection };
