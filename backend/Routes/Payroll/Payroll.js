// Import the necessary modules and functions
const express = require('express');
const router = express.Router();
const { calculatePayroll } = require('../../Database/Payroll/payroll');

// Define the route
router.post('/',async (req, res) => {
    const { organizationId, year, month } = req.body;

    // Call the calculatePayroll function with the provided parameters
    const {data,message,error }= await calculatePayroll(organizationId, year, month);
    if(data){
        res.status(200).json({ data,message });
    }
    else if(error){
        res.status(500).json({ error });
    }

});

module.exports = router;
