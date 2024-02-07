const express = require('express');
const router = express.Router();
const {addDeductionToEmployee}=require('../../../Database/Payroll/Deduction/deduction');
router.post('/', async (req, res) => {
    try {
        const {employeeId, deductionType, month, year, deductionReason, deductionAmount} = req.body;
        
        // Call the addBonus function from your database file
        await addDeductionToEmployee(employeeId, deductionType, month, year, deductionReason, deductionAmount);
        
        res.status(200).json({ message: 'Bonus added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;