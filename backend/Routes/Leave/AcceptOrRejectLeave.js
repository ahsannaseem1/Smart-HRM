const express = require("express");
const router = express.Router();

const {
  acceptOrRejectLeave,
} = require("../../Database/Leave/AcceptOrRejectLeave");

router.post("/", async (req, res) => {
  try {
    const { leaveId, employeeId, status,organizationId,email } = req.body;

    const {
      userType,
      user,
      employeeData,
      totalLeavesRequestPending,
      departments,
      error
    } = await acceptOrRejectLeave(employeeId, leaveId, status,organizationId,email);
     if (error) {
      res.status(500).json(error);
    }
    res.status(200).json({userType, user, employeeData, totalLeavesRequestPending, departments});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
