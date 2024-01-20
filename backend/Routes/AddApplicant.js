const express = require('express');
const multer = require('multer');
const { MongoClient, Binary } = require('mongodb');

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const router = express.Router();

// Multer configuration
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

// MongoDB connection
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define the route to handle file upload
router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);

    const { password, email } = req.body;

    // Convert the file buffer to BinData
    const pdfBuffer = req.file.buffer; // Access the buffer of the uploaded file
    const pdfBinData = new Binary(pdfBuffer);

    const applicantDoc = {
      email: email,
      password: password,
      resume: pdfBinData,
    };

    const applicantCollection = db.collection('Applicants');
    const result = await applicantCollection.insertOne(applicantDoc);

    res.status(200).json({ message: 'Applicant created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the applicant', details: error.message });
  } finally {
    // Close MongoDB connection
    await client.close();
  }
});

module.exports = router;
