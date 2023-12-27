const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    auth: {
      type: mongoose.ObjectId,
      ref: "Auth",
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email should be unique."],
    },
    emailVerified: {
      type: String,
      default: "No",
      enum: ["Yes", "No"],
    },
    avatar: {
      publicId: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    //project requested
    //comments
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
