require('dotenv').config(); // Load .env file

const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
    try {
        const uri = process.env.DB_URI;
        const dbName = process.env.DB_NAME;

        const client = new MongoClient(uri);

        await client.connect();

        const db = client.db(dbName);

        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}


module.exports = {connectToMongoDB};