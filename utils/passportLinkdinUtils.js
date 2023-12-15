const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;

module.exports = passportLinkdinUtils = async () => {
  try {
    passport.serializeUser((user, done) => {
      done(null, user);
    });
    passport.deserializeUser(function (user, done) {
      done(null, user);
    });

    passport.use(
      new LinkedInStrategy(
        {
          clientID: "7775lqazjpkp6h",
          clientSecret: "6n9UyFA36zNT5KLo",
          callbackURL: "http://localhost:8080/api/v2/auth/linkedin/callback",
          scope: ["openid", "profile", "email"],
          state: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
          return done(null, profile);
        }
      )
    );
  } catch (error) {
    console.log("Error in passportLinkdinUtils functions.".red);
    console.log(error);
  }
};
