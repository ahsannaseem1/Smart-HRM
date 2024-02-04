const express = require('express');
const router = express.Router();
const database = require('./database'); // Assuming you have a separate file for your database functions

router.post('/jobs', (req, res) => {
    const { organizationId, jobTitle, jobDescription, location } = req.body;

    // Call the addJob function from the database
    database.addJob(organizationId, jobTitle, jobDescription, location)
        .then(() => {
            res.status(200).json({ message: 'Job added successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Failed to add job' });
        });
});

module.exports = router;