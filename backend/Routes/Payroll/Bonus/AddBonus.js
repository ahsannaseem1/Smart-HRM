const express = require('express');
const router = express.Router();
const { addBonus } = require('../../../Database/Payroll/Bonus/addBonus'); // Assuming you have a separate file for your database functions

router.post('/', async (req, res) => {
    try {
        const { employeeId, bonusType, date, month, year, bonusAmount} = req.body;
        
        // Call the addBonus function from your database file
        await addBonus(employeeId, bonusType, date, month, year, bonusAmount);
        
        res.status(200).json({ message: 'Bonus added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;