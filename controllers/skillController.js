const skillModel = require("../models/skillModel.js");
const sendRes = require("../utils/sendRes.js");
const cloudinary = require("../utils/cloudinary.js");

const creatSkillsController = async (req, res) => {
  try {
    const { skillName, yearOfExperience } = req.fields;
    const { image } = req.files;
    if (!skillName || !yearOfExperience || !image) {
      return sendRes(res, 200, false, "Some fields are missing");
    }
    //upload image on cloudinary
    const result = await cloudinary.uploader.upload(image.path, {
      foldar: "Portfolio2",
    });
    if (!result) {
      return sendRes(res, 200, false, "Some thing went wrong try again");
    }
    const forSkillNo = await skillModel.find({});
    if (!forSkillNo) {
      return sendRes(res, 200, false, "Some thing went wrong try again");
    }
    const skillNo = forSkillNo.length + 1;
    const skill = await new skillModel({
      skillNo,
      skillName,
      yearOfExperience,
      image: {
        publicId: result.public_id,
        url: result.secure_url,
      },
    }).save();
    if (!skill) {
      return sendRes(res, 200, false, "Some thing went wrong try again");
    }
    return sendRes(res, 200, true, "Skill created successfully");
  } catch (error) {
    console.log("Error in creatSkillsController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

const getSkillController = async (req, res) => {
  try {
    const { page, count, skillName } = req.query;

    if (!skillName) {
      const i = page > 0 ? page * 3 : 3,
        j = count > 0 ? count * 3 : 3;
      const skills = await skillModel
        .find(
          {},
          {
            skillName: 1,
            yearOfExperience: 1,
            endorsement: { $slice: [j - 3, j] },
          }
        )
        .skip(i - 3)
        .limit(3);
      if (!skills) {
        return sendRes(res, 200, false, "Some thing went wrong");
      }
      return sendRes(
        res,
        200,
        true,
        "Find all skills with endorsement page=i count=j",
        {
          skills,
        }
      );
    } else {
      j = count > 0 ? count * 3 : 3;
      const skills = await skillModel.find(
        { skillName: skillName },
        {
          endorsement: { $slice: [j - 3, j] },
        }
      );
      if (!skills) {
        return sendRes(res, 200, false, "Some thing went wrong");
      }
      return sendRes(
        res,
        200,
        true,
        "Find all skills with endorsement where skillname is matched and count=j",
        {
          skills,
        }
      );
    }
  } catch (error) {
    console.log("Error in creatSkillsController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

const findAllEndorsementLengthController = async (req, res) => {
  try {
    const len = skillModel.aggregate([
      { $project: { endorsementLength: { $size: "$endorsement" } } }, // Project the size of the endorsement array
    ]);
    if (!len) {
      return sendRes(res, 200, false, "Some thing went wrong");
    }
    return sendRes(res, 200, true, "Length of all endorsement array", {
      len: len,
    });
  } catch (error) {
    console.log("Error in findAllEndorsementLengthController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

const countAllSkillController = async (req, res) => {
  try {
    const feature = await skillModel.find({});
    if (!feature) {
      return sendRes(res, 200, false, "Some thing went wrong");
    }
    const len = feature.length;
    return sendRes(res, 200, true, "Find the count in totalSkillCount", {
      totalSkillCount: len,
    });
  } catch (error) {
    console.log("Error in countAllFeaturesController function".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error");
  }
};

module.exports = {
  creatSkillsController,
  getSkillController,
  findAllEndorsementLengthController,
  countAllSkillController,
};
