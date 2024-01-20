// server.js (or app.js)
const express = require('express');
const { MongoClient } = require('mongodb');

const uri = process.env.DB_URI; // Replace with your MongoDB URI
const dbName = process.env.DB_NAME; // Replace with your MongoDB database name

const router = express.Router();

// Middleware to handle MongoDB connection
const withMongoDB = async (req, res, next) => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    req.mongoClient = client; // Attach MongoDB client to the request
    next();
  } catch (error) {
    res.status(500).json({ error: 'Unable to connect to MongoDB', details: error.message });
  }
};

// Define the route to get all applicants
router.get('/', withMongoDB, async (req, res) => {
  const { mongoClient } = req;

  try {
    const db = mongoClient.db(dbName);
    const applicantCollection = db.collection('Applicants');
    const applicants = await applicantCollection.find().toArray();
    res.status(200).send(applicants);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching applicants', details: error.message });
  } finally {
    // Close MongoDB connection after completing the request
      await mongoClient.close();
    
  }
});

module.exports = router;
