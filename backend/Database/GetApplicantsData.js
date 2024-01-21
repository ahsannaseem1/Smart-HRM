const express = require("express");
const { MongoClient, Binary } = require("mongodb");
const pdf = require("pdf-parse");

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;


const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// try {
//   await client.connect();
//   req.mongoClient = client;
//   next();
// } catch (error) {
//   res
//     .status(500)
//     .json({ error: "Unable to connect to MongoDB", details: error.message });
// }

const extractTextFromResume = async (resumeBuffer) => {
    await client.connect();
//   req.mongoClient = client;
  try {
    const data = await pdf(resumeBuffer);
    return data.text;
  } catch (error) {
    console.error("Error extracting text from resume:", error);
    return null;
  }
};

async function GetApplicantsData() {
  try {
    const db = client.db(dbName);
    const applicantCollection = db.collection("Applicants");
    const applicants = await applicantCollection.find().toArray();

    const applicantsWithDecodedResume = await Promise.all(
      applicants.map(async (applicant) => {
        const { _id, email, password, resume } = applicant;
        const decodedResume = await extractTextFromResume(resume.buffer);

        return {
          id: _id,
          email,
          password,
          resume: decodedResume,
        };
      })
    );

    return applicantsWithDecodedResume;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {GetApplicantsData};
