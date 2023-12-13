const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    return hashedPassword;
  } catch (error) {
    console.log("Error in hashPassword function.".red);
    console.log(error);
  }
};

module.exports = hashPassword;
