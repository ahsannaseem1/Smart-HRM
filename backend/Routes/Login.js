const express = require("express");
const bcrypt = require("bcrypt");

const { authenticateUser } = require("../Authentication/userAuth");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await authenticateUser(email, password);
<<<<<<< HEAD
  console.log(user);
=======
>>>>>>> 16c2a978ac2458d2ff6f5a6cfafa6ab2155c6ae3
  if (!user.user) {
    res.status(500).send(user);
  } else {
    res.status(200).send(user);
  }
});
module.exports = router;
