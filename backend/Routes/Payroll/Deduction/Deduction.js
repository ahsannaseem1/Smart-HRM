const express = require('express');
const router = express.Router();
const {addDeductionToEmployee}=require('../../../Database/Payroll/Deduction/deduction');
router.post('/', async (req, res) => {
    try {
        const {employeeId, deductionType, month, year, deductionReason, deductionAmount} = req.body;
        
        // Call the addBonus function from your database file
        const {error}=await addDeductionToEmployee(employeeId, deductionType, month, year, deductionReason, deductionAmount);
        
        if(error){
            res.status(500).json({ error });
        }
        else {
            res.status(200).json({ message: 'Bonus added successfully' });
        }
    } catch (error) {
        console.error({error:error});
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;