const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "userId id required."],
      unique: [true, "This userId is already taken."],
      minlength: [2, "userId should be minium 2 characher long."],
    },
    password: {
      type: String,
      required: [true, "Password is requires."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auth", authSchema);
