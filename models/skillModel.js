const mongoose = require("mongoose");
const skillSchema = new mongoose.Schema(
  {
    skilNo: {
      type: Number,
      required: true,
    },
    skillName: {
      type: String,
      required: [true, "skillName id required."],
    },
    yearOfExperience: {
      type: String,
      required: [true, "yearOfExperience is required."],
    },
    image: {
      publicId: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    endorsement: [
      {
        type: mongoose.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Skill", skillSchema);
