const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    auth: {
      type: mongoose.ObjectId,
      ref: "Auth",
    },
    personalInfo: {
      name: {},
      email: {},
      phoneNo: {},
      whatsappNo: {},
      about: {},
      bio: {},
    },
    skill: [
      {
        name: {},
        yearOfExp: {},
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
