const express = require("express");
const passport = require("passport");
const {
  registerController,
  registerByEmailAndPassword,
  emailAlreadyRegistred,
  loginController,
  loginByEmailAndPasswordController,
  successGoogleController,
  failureGoogleController,
  successGithubController,
  failureGithubController,
  successLinkedinController,
  failureLinkedinController,
  sendEmailForEmailVerificationController,
  emailVerificationController,
  userIdAlreadyRegistred,
} = require("../controllers/authController.js");
const passportGoogleUtils = require("../utils/passportGoogleUtils.js");
const passportGithubUtils = require("../utils/passportGithubUtils.js");
const passportLinkdinUtils = require("../utils/passportLinkdinUtils.js");

const router = express.Router();

passportGoogleUtils();
passportGithubUtils();
passportLinkdinUtils();

router.use(passport.initialize());
router.use(passport.session());

// register--by userId and password
router.post("/register", registerController);
//register by email and password
router.post("/register/email-password", registerByEmailAndPassword);
//email already registred
router.post("/email-registred", emailAlreadyRegistred);
//user id already registred
router.post("/userid-registred", userIdAlreadyRegistred);
// login--by userId and password
router.post("/login", loginController);
//login using email and password
router.post("/login/email-password", loginByEmailAndPasswordController);

//register by google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
//register by google--callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/v2/auth/google/success",
    failureRedirect: "/api/v2/auth/google/failure",
  })
);
// Success
router.get("/google/success", successGoogleController);
// failure
router.get("/google/failure", failureGoogleController);

// register and login with github
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/api/v2/auth/github/success",
    failureRedirect: "/api/v2/auth/github/failure",
  })
);
// Success
router.get("/github/success", successGithubController);
// failure
router.get("/github/failure", failureGithubController);

// register and login with linkdin
router.get(
  "/linkedin",
  passport.authenticate("linkedin", { state: "SOME STATE" })
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: "/api/v2/auth/linkedin/success",
    failureRedirect: "/api/v2/auth/linkedin/failure",
  })
);
// Success
router.get("/linkedin/success", successLinkedinController);
// failure
router.get("/linkedin/failure", failureLinkedinController);

/**********************************Email Verification**************************************/
//send mail
router.post("/email/verify/", sendEmailForEmailVerificationController);
//verify mail
router.get("/email/verify/", emailVerificationController);

module.exports = router;
