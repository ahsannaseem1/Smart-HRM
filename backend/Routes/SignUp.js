const express = require('express');

const {addOrganization}=require('../Database/addOrganization');
 
const router=express.Router();

router.post('/', async (req, res) => {

   const {name,email,password,numberOfHrs,numberOfEmployees,contact,address}=req.body
    try {
        const organizationId = await addOrganization(name, numberOfHrs,numberOfEmployees,email,address, contact, password);
        res.status(200).send({id:organizationId});
    } catch (error) {
        res.status(500).send({error:error.message});
    }
})
module.exports=router;
