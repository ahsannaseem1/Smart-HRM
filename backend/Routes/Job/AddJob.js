const express = require('express');
const router = express.Router();
const {addJob}=require('../../Database/Job/addJob')
router.post('/',async (req, res) => {
    console.log('add job called')
    const { organizationId, jobTitle, jobDescription, location } = req.body;
    await addJob(organizationId, jobTitle, jobDescription, location);
    res.status(200).send({message:"Job added successfully!"});

});

module.exports = router;