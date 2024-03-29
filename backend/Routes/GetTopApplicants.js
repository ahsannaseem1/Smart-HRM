const express = require('express');
const axios = require('axios');
const { MongoClient, Binary } = require('mongodb');
const { GetApplicantsData } = require('../Database/GetApplicantsData');
const {addRanking}=require('../Database/addRankings')

const app = express();


const router = express.Router();


app.use(express.json());

router.get('/', async (req, res) => {
    const{job_description}=req.body;
    console.log(job_description)
    const applicants = await GetApplicantsData();
    const flaskApiUrl = 'http://127.0.0.1:5001/api';  // Replace with your Flask API URL
        const response = await axios.post(flaskApiUrl, { applicants , job_description});

        // Handle the Flask API response if needed
        const flaskApiResponse = response.data;
        console.log('Flask API Response:', flaskApiResponse);
        await addRanking(flaskApiResponse.ranking);
        // Continue with other logic or send the applicants data as a response
        res.json(flaskApiResponse);

    // res.json(applicants);
});

module.exports = router;
