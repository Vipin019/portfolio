const JWT = require("jsonwebtoken");
const authModel = require("../models/aurhModel.js");
const sendRes = require("../utils/sendRes.js");
const hashPassword = require("../utils/hashPassword.js");
const comparePassword = require("../utils/comparePassword.js");

//register-- using userId and password
const registerController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    if (!userId) {
      return sendRes(res, 400, false, "userId is required.");
    }
    if (!password) {
      return sendRes(res, 400, false, "Password is required.");
    }
    if (userId.length < 2) {
      return sendRes(res, 400, false, "userId should be 2 character long.");
    }
    if (password.length < 6) {
      return sendRes(res, 400, false, "Password ahould be 6 character long.");
    }
    const hashedPassword = await hashPassword(password);
    if (!hashedPassword) {
      return sendRes(
        res,
        401,
        false,
        "Can not creat account please try again."
      );
    }
    const registred = await authModel.findOne({ userId, hashedPassword });
    if (registred) {
      return sendRes(res, 401, false, "Already registred, please login.");
    }
    const existing = await authModel.findOne({ userId });
    if (existing) {
      return sendRes(
        res,
        401,
        false,
        "This uaerId is already taken by the other user choose another userId."
      );
    }
    const account = await new authModel({
      userId,
      password: hashedPassword,
    }).save();
    if (!account) {
      return sendRes(
        res,
        500,
        false,
        "Unable to create account please try again."
      );
    }

    //login after register
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_IN,
    });
    if (!token) {
      return sendRes(
        res,
        500,
        false,
        "Registred successfully but unable to login automatically please login."
      );
    }
    return sendRes(res, 200, true, "Account created and login successfully.", {
      account,
      token,
    });
  } catch (error) {
    console.log("Error in registerController".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};

//login-- using userId and password
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    if (!userId) {
      return sendRes(res, 400, false, "userId is required.");
    }
    if (!password) {
      return sendRes(res, 400, false, "Password is required.");
    }
    const user = await authModel.findOne({ userId });
    if (!user) {
      return sendRes(
        res,
        400,
        false,
        "Incorrect combination of userId and password."
      );
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return sendRes(
        res,
        400,
        false,
        "Incorrect combination of userId and password."
      );
    }
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_IN,
    });
    if (!token) {
      return sendRes(res, 500, false, "Unable to login please try again.");
    }
    return sendRes(res, 200, true, "Login successfully.", { user, token });
  } catch (error) {
    console.log("Error in loginController.".red);
    console.log(error);
    sendRes(res, 500, false, "Server internal Error.");
  }
};

//Register and login with google
const successGoogleController = async (req, res) => {
  try {
    const { user } = req;
    if (!user) {
      return sendRes(
        res,
        500,
        false,
        "Can not create account please try again."
      );
    }
    /*Dont store date of the user in the auth model who is registred direstly by google onlyy store the data*/
    //After creating the other sxhema will store the data.
    //login after register
    //check if already in database then dont save again
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_IN,
    });
    if (!token) {
      return sendRes(
        res,
        500,
        false,
        "Registred successfully but unable to login automatically please login."
      );
    }
    return sendRes(res, 200, true, "Account created and login successfully.", {
      user,
      token,
    });
  } catch (error) {
    console.log("Error in successGoogleController function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
const failureGoogleController = async (req, res) => {
  return sendRes(
    res,
    500,
    false,
    "Can not register and login please try again."
  );
};

//Register and login with github
const successGithubController = async (req, res) => {
  try {
    const { user } = req;
    if (!user) {
      return sendRes(
        res,
        500,
        false,
        "Can not create account please try again."
      );
    }
    /*Dont store date of the user in the auth model who is registred direstly by google onlyy store the data*/
    //After creating the other sxhema will store the data.
    //login after register
    //check if already in database then dont save again
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_IN,
    });
    if (!token) {
      return sendRes(
        res,
        500,
        false,
        "Registred successfully but unable to login automatically please login."
      );
    }
    return sendRes(res, 200, true, "Account created and login successfully.", {
      user,
      token,
    });
  } catch (error) {
    console.log("Error in successGithubController function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
const failureGithubController = async (req, res) => {
  return sendRes(
    res,
    500,
    false,
    "Can not register and login please try again."
  );
};

//Register and login with linkdin
const successLinkedinController = async (req, res) => {
  try {
    const { user } = req;
    console.log(req);
    if (!user) {
      return sendRes(
        res,
        500,
        false,
        "Can not create account please try again."
      );
    }
    /*Dont store date of the user in the auth model who is registred direstly by google onlyy store the data*/
    //After creating the other sxhema will store the data.
    //login after register
    //check if already in database then dont save again
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_IN,
    });
    if (!token) {
      return sendRes(
        res,
        500,
        false,
        "Registred successfully but unable to login automatically please login."
      );
    }
    return sendRes(res, 200, true, "Account created and login successfully.", {
      user,
      token,
    });
  } catch (error) {
    console.log("Error in successLinkedinController function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
const failureLinkedinController = async (req, res) => {
  console.log(req);
  return sendRes(
    res,
    500,
    false,
    "Can not register and login please try again."
  );
};

//accont verification
//login with github
//change password
//forget password

module.exports = {
  registerController,
  loginController,
  successGoogleController,
  failureGoogleController,
  successGithubController,
  failureGithubController,
  successLinkedinController,
  failureLinkedinController,
};
