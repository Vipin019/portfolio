const bcrypt = require("bcrypt");

const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log("Error in comparePassword function".red);
    console.log(error);
    return false;
  }
};
const compareToken = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log("Error in comparePassword function".red);
    console.log(error);
    return false;
  }
};

module.exports = { comparePassword, compareToken };
