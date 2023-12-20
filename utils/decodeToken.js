const decodeToken = async (token) => {
  try {
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    return decode;
  } catch (error) {
    console.log("Error in decodeToken function.".red);
    console.log(error);
    return null;
  }
};

module.exports = { decodeToken };
