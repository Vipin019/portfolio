const express = require("express");
const passport = require("passport");
const {
  registerController,
  loginController,
  successGoogleController,
  failureGoogleController,
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

module.exports = router;
