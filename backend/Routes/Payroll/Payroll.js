// Import the necessary modules and functions
const express = require('express');
const router = express.Router();
const { calculatePayroll } = require('../../Database/Payroll/payroll');

// Define the route
router.post('/',async (req, res) => {
    const { organizationId, year, month } = req.body;

    // Call the calculatePayroll function with the provided parameters
    const data = await calculatePayroll(organizationId, year, month);

    res.json({ data });
});

module.exports = router;
