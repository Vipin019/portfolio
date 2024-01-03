const featureModel = require("../models/featureModel");
const cloudinary = require("../utils/cloudinary.js");

const createFeatureController = async (req, res) => {
  try {
    const { featureName, link } = req.fields;
    const { image } = req.files;

    if (!featureName || !link || !image) {
      return sendRes(res, 200, false, "Some fields are missing");
    }
    //upload image on cloudinary
    const result = await cloudinary.uploader.upload(image.path, {
      foldar: "Portfolio2",
    });
    if (!result) {
      return sendRes(res, 200, false, "Some thing went wrong try again");
    }
    const feature = await new featureModel({
      featureName,
      link,
      image: {
        publicId: result.public_id,
        url: result.secure_url,
      },
    }).save();
    if (!feature) {
      return sendRes(res, 200, false, "Some thing went wrong try again");
    }
    return sendRes(res, 200, true, "Feature created successfully");
  } catch (error) {
    console.log("Error in createFeatureController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

const getFeatureController = async (req, res) => {
  try {
    const { page } = req.query;
    const i = page > 0 ? page * 2 : 2;
    const feature = await featureModel
      .find({})
      .skip(i - 2)
      .limit(2);
    if (!feature) {
      return sendRes(res, 200, false, "Some thing went wrong");
    }
    return sendRes(res, 200, true, "Find all features in features array", {
      features: feature,
    });
  } catch (error) {
    console.log("Error in getFeatureController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

module.exports = { createFeatureController, getFeatureController };
