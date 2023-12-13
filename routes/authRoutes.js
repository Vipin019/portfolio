const express = require("express");
const passport = require("passport");
const {
  registerController,
  loginController,
  successGoogleRegister,
  failureGoogleRegister,
} = require("../controllers/authController.js");
const passportUtils = require("../utils/passportUtils.js");

const router = express.Router();
passportUtils();

router.use(passport.initialize());
router.use(passport.session());

// register--by userId and password
router.post("/register", registerController);
// login--by userId and password
router.post("/login", loginController);

//register by google
router.get(
  "/register/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
//register by google--callback
router.get(
  "/register/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/v2/auth/register/google/success",
    failureRedirect: "/api/v2/auth/register/google/failure",
  })
);
// Success
router.get("/register/google/success", successGoogleRegister);
// failure
router.get("/register/google/failure", failureGoogleRegister);

module.exports = router;