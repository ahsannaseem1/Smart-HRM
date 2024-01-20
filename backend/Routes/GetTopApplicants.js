const express = require('express');
const { MongoClient, Binary } = require('mongodb');
const pdf = require('pdf-parse');
const app = express();

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;
const router = express.Router();

app.use(express.json());

const withMongoDB = async (req, res, next) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        req.mongoClient = client;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Unable to connect to MongoDB', details: error.message });
    }
};

const extractTextFromResume = async (resumeBuffer) => {
    try {
        const data = await pdf(resumeBuffer);
        return data.text;
    } catch (error) {
        console.error('Error extracting text from resume:', error);
        return null;
    }
};

router.get('/', withMongoDB, async (req, res) => {
    const { mongoClient } = req;

    try {
        const db = mongoClient.db(dbName);
        const applicantCollection = db.collection('Applicants');
        const applicants = await applicantCollection.find().toArray();

        const applicantsWithDecodedResume = await Promise.all(applicants.map(async (applicant) => {
            const { email, password, resume } = applicant;
            const decodedResume = await extractTextFromResume(resume.buffer);

            return {
                email,
                password,
                resume: decodedResume,
            };
        }));

        console.log(applicantsWithDecodedResume);
        res.json(applicantsWithDecodedResume);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
