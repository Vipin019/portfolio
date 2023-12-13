const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connect to mongodb database ${res.connection.host}`.green);
  } catch (error) {
    console.log(`Error in mongodb coonection.`.red);
    console.log(error);
  }
};

module.exports = connectDB;
