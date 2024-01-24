const express = require('express');
const router = express.Router();
const {findEmployeesWithPendingLeaveRequests}=require('../../Database/Leave/GetLeavesData')

router.post('/', async(req, res) => {
    
    const { organizationId } = req.body;

    const employeeData = await findEmployeesWithPendingLeaveRequests(organizationId);

    res.json(employeeData);
});

module.exports = router;
