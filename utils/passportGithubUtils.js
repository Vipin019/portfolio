const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

module.exports = passportGitHubUtils = async () => {
  try {
    passport.serializeUser((user, done) => {
      done(null, user);
    });
    passport.deserializeUser(function (user, done) {
      done(null, user);
    });

    passport.use(
      new GitHubStrategy(
        {
          clientID: "2dfcf986da9e6f1c875c",
          clientSecret: "8c7acac0d50978a778f70383b4112f58f9a91504",
          callbackURL: "http://localhost:8080/api/v2/auth/github/callback",
        },
        function (request, accessToken, refreshToken, profile, done) {
          return done(null, profile);
        }
      )
    );
  } catch (error) {
    console.log("Error in passportgitHubUtils functions.".red);
    console.log(error);
  }
};
