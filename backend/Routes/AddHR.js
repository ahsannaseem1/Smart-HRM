const express = require('express');

const {addHR}=require('../Database/addHR');
 
const router=express.Router();

router.post('/', async (req, res) => {

   const {id,email,password}=req.body
    try {
        const result = await addHR(id,email, password);
        res.status(200).json({message:"HR added successfully"}).send();
    } catch (error) {
        res.status(500).send({error:error.message});
    }
})
module.exports=router;
