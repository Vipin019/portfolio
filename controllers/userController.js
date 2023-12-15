const userModel = require("../models/userModel.js");
const sendRes = require("../utils/sendRes.js");
const cloudinary = require("../utils/cloudinary.js");

const createProfileController = async (req, res) => {
  try {
    const { name, email } = req.fields;
    const { avatar } = req.files;
    if (!name) {
      return sendRes(res, 400, false, "Name is required.");
    }
    if (!email) {
      return sendRes(res, 400, false, "Email is required.");
    }
    let defaultAvatar = {
      publicId: "tjghde5gxcikaeau7jey",
      url: "https://res.cloudinary.com/ddh25zcdh/image/upload/v1702642840/tjghde5gxcikaeau7jey.avif",
    };
    if (avatar) {
      const result = await cloudinary.uploader.upload(avatar.path, {
        foldar: "Portfolio2",
      });
      defaultAvatar = {
        publicId: result.public_id,
        url: result.secure_url,
      };
    }
    const user = await new userModel({
      name,
      email,
      avatar: defaultAvatar,
    }).save();
    if (!user) {
      return sendRes(res, 500, false, "Unable to save please try again.");
    }
    return sendRes(res, 201, true, "Data saved successfully.", { user });
  } catch (error) {
    console.log("Error in createProfileController".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error please try again.");
  }
};

module.exports = {
  createProfileController,
};
