const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

module.exports = passportUtils = async () => {
  try {
    passport.serializeUser((user, done) => {
      done(null, user);
    });
    passport.deserializeUser(function (user, done) {
      done(null, user);
    });

    passport.use(
      new GoogleStrategy(
        {
          clientID:
            "951284128729-iuvfti2ih8uktgt3oo5a399tuvsn0ocq.apps.googleusercontent.com", // Your Credentials here.
          clientSecret: "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", // Your Credentials here.
          callbackURL:
            "http://localhost:8080/api/v2/auth/register/google/callback",
          passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
          return done(null, profile);
        }
      )
    );
  } catch (error) {
    console.log("Error in passportUtils functions.".red);
    console.log(error);
  }
};
