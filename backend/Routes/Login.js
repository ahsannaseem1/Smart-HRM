const express = require('express');
const bcrypt = require("bcrypt");

const {authenticateUser}=require('../Authentication/userAuth')
 
const router=express.Router();

router.post('/', async (req, res) => {

   const {email,password}=req.body;
   const user=await authenticateUser(email,password);
   console.log(user);
   res.send(user);
   
})
module.exports=router;
