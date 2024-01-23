// server.js (or app.js)
const express = require('express');
const { MongoClient } = require('mongodb');
const {GetApplicants}=require('../Database/getApplicants')

const router = express.Router();


// Define the route to get all applicants
router.get('/',  async (req, res) => {
  const applicantData=await GetApplicants();

  if(applicantData.applicants){
    res.status(200).send(applicantData.applicants)
  }
  else{
    res.status(500).send(applicantData.error)
  }
});

module.exports = router;
