const express = require("express");
const router = express.Router();

const {
  acceptOrRejectLeave,
} = require("../../Database/Leave/AcceptOrRejectLeave");

router.post("/", async (req, res) => {
  try {
    const { leaveId, employeeId, status } = req.body;

    const { message, error } = await acceptOrRejectLeave(
      employeeId,
      leaveId,
      status
    );
    if (message) {
      res.status(200).json(message);
    } else if (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
