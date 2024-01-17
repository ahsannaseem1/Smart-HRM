const express = require('express');

const {addOrganization}=require('../Database/addOrganization');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, password, numberOfHrs, numberOfEmployees, contact, address } = req.body;
    try {
        const { organizationId,organizationName, error } = await addOrganization(name, numberOfHrs, numberOfEmployees, email, address, contact, password);
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