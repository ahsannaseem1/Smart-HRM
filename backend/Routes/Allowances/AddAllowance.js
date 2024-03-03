const express = require('express');
const router = express.Router();

// Import your database function here
const { addAllowances } = require('../../Database/Allowances/addAllowances');

router.post('/', async (req, res) => {
    try {
        const { employeeId, allowanceType, allowanceAmount } = req.body;

        // Call your database function here
        await addAllowances(employeeId, allowanceType, allowanceAmount);

        // Send a success response
        res.status(200).json({ message: 'Allowance added successfully' });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;