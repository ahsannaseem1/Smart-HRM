const express = require("express");
const router = express.Router();

const {
  acceptOrRejectLeave,
} = require("../../Database/Leave/AcceptOrRejectLeave");

router.post("/", async (req, res) => {
  try {
    const { leaveId, employeeId, status,organizationId } = req.body;

    const {
      userType,
      user,
      employeeData,
      totalLeavesRequestPending,
      departments,
      error
    } = await acceptOrRejectLeave(employeeId, leaveId, status,organizationId);
    if (user) {
      res.status(200).json({data:{userType, user, employeeData, totalLeavesRequestPending, departments}, message});
    } else if (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
