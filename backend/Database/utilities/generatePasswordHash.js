const bcrypt = require("bcrypt");

const generateHash = async (password) => {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (error) {
      throw error;
    }
  };
  module.exports={
    generateHash
  }