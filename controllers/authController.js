const JWT = require("jsonwebtoken");
const sendRes = require("../utils/sendRes.js");
const { hashPassword } = require("../utils/hashPassword.js");
const authModel = require("../models/aurhModel.js");
const userModel = require("../models/userModel.js");

const {
  comparePassword,
  compareToken,
} = require("../utils/comparePassword.js");
const sendEmail = require("../utils/sendemail.js");
const { decodeToken } = require("../utils/decodeToken.js");

//register-- using userId and password
const registerController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    if (!userId) {
      return sendRes(res, 200, false, "userId is required.");
    }
    if (!password) {
      return sendRes(res, 200, false, "Password is required.");
    }
    if (userId.length < 2) {
      return sendRes(res, 200, false, "userId should be 2 character long.");
    }
    if (password.length < 6) {
      return sendRes(res, 200, false, "Password ahould be 6 character long.");
    }
    const hashedPassword = await hashPassword(password);
    if (!hashedPassword) {
      return sendRes(
        res,
        202,
        false,
        "Can not creat account please try again."
      );
    }
    const registred = await authModel.findOne({ userId, hashedPassword });
    if (registred) {
      return sendRes(res, 200, false, "Already registred, please login.");
    }
    const existing = await authModel.findOne({ userId });
    if (existing) {
      return sendRes(
        res,
        200,
        false,
        "This userId is already taken by the other user choose another userId."
      );
    }
    const account = await new authModel({
      userId,
      password: hashedPassword,
    }).save();
    if (!account) {
      return sendRes(
        res,
        200,
        false,
        "Unable to create account please try again."
      );
    }

    //login after register
    const token = JWT.sign({ _id: account._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRE_IN,
    });
    if (!token) {
      return sendRes(
        res,
        200,
        false,
        "Registred successfully but unable to login automatically please login."
      );
    }
    res.cookie("token", token, {
      maxAge: process.env.COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000,
      secure: true,
      httpOnly: true,
      sameSite: "Strict",
    });
    res.cookie("login", true, {
      maxAge: process.env.COOKIE_EXPIRE_IN * 24 * 60 * 60 * 1000,
    });
    return sendRes(res, 201, true, "Account created and login successfully.", {
      account,
    });
  } catch (error) {
    console.log("Error in registerController".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
//is email already registred
const emailAlreadyRegistred = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return sendRes(res, 401, false, "Email is required.");
    }
    const isRegistred = await userModel.findOne({ email });
    // console.log(isRegistred);
    if (isRegistred) {
      return sendRes(res, 200, true, "Email Already registred please sign in.");
    }
    return sendRes(res, 200, false, "Email not registred.");
  } catch (error) {
    console.log("Error in emailAlreadyRegistred function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
//is user id already taken
const userIdAlreadyRegistred = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return sendRes(res, 401, false, "User Id is required.");
    }
    const isRegistred = await authModel.findOne({ userId });
    // console.log(isRegistred);
    if (isRegistred) {
      return sendRes(
        res,
        200,
        true,
        "User id Already already taken please try another one."
      );
    }
    return sendRes(res, 200, false, "User id is avilable.");
  } catch (error) {
    console.log("Error in userIdAlreadyRegistred function.".red);
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

//login with email and password
/*Pending */

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

//email verification
const sendEmailForEmailVerificationController = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await userModel.findById(id);
    if (!user) {
      return sendRes(res, 500, false, "Something went wrong please try again.");
    }
    const generatedteToken = JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.EXPIRE_IN,
      }
    );
    if (!generatedteToken) {
      return sendRes(res, 401, false, "Something went wrong please try again.");
    }
    const hashedId = await hashPassword(id);
    const url = `http://localhost:8080/api/v2/auth/email/verify?id=${hashedId}&token=${generatedteToken}`;
    await sendEmail({
      email: user.email,
      subject: `Verify Email`,
      message: "Follow the link below to verify your email.",
      html: `<p>Hi Aman,</p><p>I am vipin. You have requested for email verification on my portfolio please follow the link below to verify email.</p> <a href=${url} >${url}</a> <p>If you have not requested it please ignore it.</p><p>Thank you</p>`,
    });
    return sendRes(res, 200, true, "Email send successfully.");
  } catch (error) {
    console.log(
      "Error in sendEmailForEmailVerificationController function.".red
    );
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
const emailVerificationController = async (req, res) => {
  try {
    const { hashedId, token } = req.query;
    const decoded = decodeToken(token);
    if (!compareToken(decoded._id, hashedId)) {
      return sendRes(
        res,
        401,
        false,
        "Email can not verify, verification link expired, please request another email."
      );
    }
    const updated = await userModel.findOneAndUpdate(
      { _id: decoded._id },
      {
        $set: {
          emailVerified: "Yes",
        },
      }
    );
    return sendRes(res, 200, true, "Email verified successfully.", { updated });
  } catch (error) {
    console.log("Error in emailVerificationController function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};

//forget password
const sendEmailForForgetPasswordController = async (req, res) => {
  try {
    const { email, userId } = req.body;
    if (userId) {
      const auth = await authModel.findOne({ userId });
      if (!auth) {
        return sendRes(res, 404, false, "This userId is not registred.");
      }
      const user = await userModel
        .findOne({ auth: { userId: userId } })
        .populate();
      if (!user) {
        /*************Update the passwoed based on the question and answer************************/
        const { que, ans } = req.body;
        if (!que) {
          return sendRes(res, 401, false, "Please select your question.");
        }
        if (!ans) {
          return sendRes(res, 401, false, "Please select your answer.");
        }
        if (!auth.que === que || !auth.ans === ans) {
          return sendRes(
            res,
            401,
            false,
            "Incorrect combination of your question and answer."
          );
        }
        const { newPassword } = req.body;
        const updated = await authModel.findOneAndUpdate(
          { userId },
          {
            $set: {
              password: newPassword,
            },
          }
        );
        if (!updated) {
          return sendRes(
            res,
            500,
            false,
            "Can not reset password please try again."
          );
        }
        return sendRes(res, 201, true, "Password updated successfully.");
      } //----------------------------------------------------------end
      /****************send reset email if account is created by userId and password*************************/
      const generatedteToken = JWT.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.EXPIRE_IN,
        }
      );
      if (!generatedteToken) {
        return sendRes(
          res,
          401,
          false,
          "Something went wrong please try again."
        );
      }
      const id = user._id;
      const hashedId = await hashPassword(id);
      if (!hashedId) {
        return sendRes(
          res,
          401,
          false,
          "Something went wrong please try again."
        );
      }
      const url = `http://localhost:8080/api/v2/auth/password/forget?id=${hashedId}&token=${generatedteToken}`;
      await sendEmail({
        email: user.email,
        subject: `Forget Password`,
        message: "Follow the link below to reset your password.",
        html: `<p>Hi ${user.name},</p><p>I am vipin. You are trying to reset your password on my portfolio please follow the link below to reset your password.</p> <a href=${url} >${url}</a> <p>If you have not requested it please check your account some one is trying to reset your password.</p><p>Thank you</p>`,
      });
      return sendRes(
        res,
        200,
        true,
        "Please check your email we have send an email. Please follow the email to reset your password."
      );
    } //------------------------------------------------------------------------------end
    /********************Send reset email when user has not nogin using userId and password*************************/
    const user = await userModel.findOne({ email });
    if (!user) {
      return sendRes(res, 500, false, "Incorrect request.");
    }
    const generatedteToken = JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.EXPIRE_IN,
      }
    );
    if (!generatedteToken) {
      return sendRes(res, 401, false, "Something went wrong please try again.");
    }
    const hashedId = await hashPassword(id);
    if (!hashedId) {
      return sendRes(res, 401, false, "Something went wrong please try again.");
    }
    const url = `http://localhost:8080/api/v2/auth/password/forget?id=${hashedId}&token=${generatedteToken}`;
    await sendEmail({
      email: user.email,
      subject: `Forget Password`,
      message: "Follow the link below to reset your password.",
      html: `<p>Hi ${user.name},</p><p>I am vipin. You are trying to reset your password on my portfolio please follow the link below to reset your password.</p> <a href=${url} >${url}</a> <p>If you have not requested it please check your account some one is trying to reset your password.</p><p>Thank you</p>`,
    });
    return sendRes(
      res,
      200,
      true,
      "Please check your email we have send an email. Please follow the email to reset your password."
    ); //-----------------------------------------------------------------------------------------------------------------end
  } catch (error) {
    console.log("Error in sendEmailForForgetPasswordController function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
const forgetPasswordController = async (req, res, next) => {
  try {
    const { hashedId, token } = req.query;
    const decoded = await decodeToken(token);
    if (!decoded) {
      return sendRes(res, 401, false, "Something went wrong please try again.");
    }
    if (!compareToken(decoded._id, hashedId)) {
      return sendRes(res, 401, false, "Link expired, please try again.");
    }
    next();
  } catch (error) {
    console.log("Error in forgetPasswordController function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
const updateForgetPasswordController = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const updated = await userModel.findOneAndUpdate(
      { _id: decoded._id },
      {
        $set: {
          password: newPassword,
        },
      }
    );
    if (!updated) {
      return sendRes(
        res,
        500,
        false,
        "Can not reset password please try again."
      );
    }
    return sendRes(res, 201, true, "Password updated successfully.");
  } catch (error) {
    console.log("Error in updateForgetPasswordController function.".red);
    console.log(error);
    return sendRes(res, 500, false, "Server internal error.");
  }
};
//Update password

module.exports = {
  registerController,
  emailAlreadyRegistred,
  userIdAlreadyRegistred,
  loginController,
  successGoogleController,
  failureGoogleController,
  successGithubController,
  failureGithubController,
  successLinkedinController,
  failureLinkedinController,
  sendEmailForEmailVerificationController,
  emailVerificationController,
  sendEmailForForgetPasswordController,
};
