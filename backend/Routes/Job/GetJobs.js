const express = require('express');
const router = express.Router();
const { getJobs,getJobsByOrganizationId } = require('../../Database/Job/getJobs');

router.get('/', async(req, res) => {
    const {jobs,error} = await getJobs();
    if(jobs){
        res.status(200).json(jobs);
    }
    else if(error){
        res.status(500).json(error);
    }
});
router.get('/:orgId', async (req, res) => {
    const orgId = req.params.orgId;
    const { jobs, error } = await getJobsByOrganizationId(orgId);

    if (jobs) {
        res.status(200).json(jobs);
    } else if (error) {
        res.status(500).json(error);
    }
});

module.exports = router;