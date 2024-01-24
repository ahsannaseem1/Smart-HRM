const express = require('express');

const {addOrganization}=require('../Database/addOrganization');
const router = express.Router();

router.post('/', async (req, res) => {
    const { orgName, email, password, numberOfHrs, numberOfEmployees, phoneNumber, address } = req.body;
    try {
        const { organizationId,organizationName, error } = await addOrganization(orgName, numberOfHrs, numberOfEmployees, email, address, phoneNumber, password);
        if (organizationId) {
            res.status(200).send({ id: organizationId,name:organizationName });
        } else {
            res.status(500).send({ error: error });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;