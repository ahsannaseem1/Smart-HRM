const express = require('express');
const router = express.Router();
const {findEmployeesWithPendingLeaveRequests}=require('../../Database/Leave/GetLeavesData')

router.get('/:organizationId', async(req, res) => {
const {organizationId}=req.params

    const employeeData = await findEmployeesWithPendingLeaveRequests(organizationId);

    res.json(employeeData);
});

module.exports = router;
