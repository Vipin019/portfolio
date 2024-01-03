const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema(
  {
    featureName: {
      type: String,
      required: [true, "Feature name is required"],
    },
    link: {
      type: String,
      required: [true, "profile link is required"],
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feature", featureSchema);
