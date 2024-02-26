const express = require('express');
const { MongoClient } = require('mongodb');
const { GetApplicantsByOrgAndJob } = require('../../Database/Applicant/getApplicants')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { organizationId, jobId } = req.query;
    console.log(organizationId, jobId);

    const applicantData = await GetApplicantsByOrgAndJob(organizationId, jobId);

    if (applicantData.applicants) {
      res.status(200).send(applicantData.applicants);
    } else {
      res.status(500).send(applicantData.error);
    }
  } catch (error) {
    console.error('Error fetching applicants:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
