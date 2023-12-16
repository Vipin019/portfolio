const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

module.exports = passportGoogleUtils = async () => {
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
            "951284128729-iuvfti2ih8uktgt3oo5a399tuvsn0ocq.apps.googleusercontent.com",
          clientSecret: "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",
          callbackURL: "http://localhost:8080/api/v2/auth/google/callback",
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