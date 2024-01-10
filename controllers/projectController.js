const sendRes = require("../utils/sendRes");
const cloudinary = require("../utils/cloudinary.js");
const projectModel = require("../models/projectModel.js");

const createProjectController = async (req, res) => {
  try {
    const { name, live, repo } = req.fields;
    const { image } = req.files;
    if (!name || !live || !repo || !image) {
      return sendRes(res, 200, false, "Some fields are missing");
    }
    //upload image on cloudinary
    const result = await cloudinary.uploader.upload(image.path, {
      foldar: "Portfolio2",
    });
    if (!result) {
      return sendRes(res, 200, false, "Some thing went wrong try again");
    }
    const project = await new projectModel({
      name,
      links: {
        live,
        repo,
      },
      image: {
        publicId: result.public_id,
        url: result.secure_url,
      },
    }).save();
    if (!project) {
      return sendRes(res, 200, false, "Some thing went wrong try again");
    }
    return sendRes(res, 201, true, "Project created succesfully");
  } catch (error) {
    console.log("Error in createProjectController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

const getProjectController = async (req, res) => {
  try {
    const { page } = req.query;
    const i = page > 0 ? page * 3 : 3;
    const project = await projectModel
      .find({})
      .skip(i - 3)
      .limit(3);
    if (!project) {
      return sendRes(res, 200, false, "Some thing went wrong");
    }
    return sendRes(res, 200, true, "Find all project in projects array", {
      projects: project,
    });
  } catch (error) {
    console.log("Error in getProjectController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

const countAllProjectController = async (req, res) => {
  try {
    const feature = await projectModel.find({});
    if (!feature) {
      return sendRes(res, 200, false, "Some thing went wrong");
    }
    const len = feature.length;
    return sendRes(res, 200, true, "Find the count in totalProjectCount", {
      totalProjectCount: len,
    });
  } catch (error) {
    console.log("Error in countAllFeaturesController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

module.exports = {
  createProjectController,
  getProjectController,
  countAllProjectController,
};
