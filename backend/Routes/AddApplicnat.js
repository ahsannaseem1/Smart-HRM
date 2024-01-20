const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const Applicant = require('../models/Applicant');

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename for uploaded files
    },
});

const upload = multer({ storage });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the route to handle file upload
router.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        // Create a new applicant document
        const applicant = new Applicant({
            name: req.body.name,
            email: req.body.email,
            resume: req.file.path, // Store the file path in the "resume" field
        });

        // Save the applicant document to the database
        await applicant.save();

        res.status(200).json({ message: 'Applicant created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the applicant' });
    }
});

module.exports = router;
