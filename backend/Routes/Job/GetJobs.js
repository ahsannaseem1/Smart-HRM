const express = require('express');
const router = express.Router();
const { getJobs } = require('../../Database/Job/getJobs');

router.get('/', async(req, res) => {
    console.log('get jobs');
    const {jobs,error} = await getJobs();
    if(jobs){
        res.status(200).json(jobs);
    }
    else if(error){
        res.status(500).json(error);
    }
});

module.exports = router;