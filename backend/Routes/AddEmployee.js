const express = require('express');

const {addEmployee}=require('../Database/addEmployee');
 
const router=express.Router();

router.post('/', async (req, res) => {

   const {organizationId, name, email, password, salary, position, contact, dateOfBirth, department, employeeId, allowances, leaves}=req.body
    try {
        const result = await addEmployee(organizationId, name, email, password, salary, position, contact, dateOfBirth, department, employeeId, allowances, leaves);
        res.status(200).json({message:"Employee added successfully"}).send();
    } catch (error) {
        res.status(500).send({error:error.message});
    }
})
module.exports=router;
