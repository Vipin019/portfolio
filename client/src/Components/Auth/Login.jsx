import "./login.css";
import googleLogo from "../../Images/googleLogo.png";
import githubLogo from "../../Images/githubLogo.png";
import linkedinLogo from "../../Images/linkedinLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../actions/index";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");

  return (
    <>
      <div className="login">
        <div className="login_loginInfo">
          <input
            type="text"
            //   value=""
            placeholder="Enter your email or userId"
            maxLength="25"
            className="login_loginInfo-id inpt"
            require
          />
          <div className="login_loginInfo_password">
            <input
              type={passwordType}
              // value=""
              placeholder="Enter your password"
              maxLength="20"
              className="login_loginInfo-password inpt"
              require
            />
            <>
              {passwordType === "password" ? (
                <IoMdEye
                  className="login_loginInfo_password-icon"
                  title="Show Password"
                  onClick={() => {
                    setPasswordType("text");
                  }}
                />
              ) : (
                <IoMdEyeOff
                  className="login_loginInfo_password-icon"
                  title="Hide Password"
                  onClick={() => {
                    setPasswordType("password");
                  }}
                />
              )}
            </>
          </div>
        </div>
        <input
          type="button"
          value="Forget Password"
          className="login-forget btn"
        />
        <input
          type="button"
          value="Sign In"
          className="login-signInButton btn"
        />
        <div className="login_signUp">
          <p>Don't have account</p>
          <input
            type="button"
            value="Sign Up"
            className="login_signUp-signUpButton btn"
            onClick={() => {
              dispatch(setAuthState("register"));
            }}
          />
        </div>
        <p>Or</p>
        <div className="login_withOther">
          <img
            src={googleLogo}
            alt="Google"
            className="login_withOther-google"
            title="Continue with Google"
            onClick={() => {
              window.open("http://localhost:8080/api/v2/auth/google", "_blank");
            }}
          />
          <img
            src={githubLogo}
            alt="Github"
            className="login_withOther-github"
            title="Continue with Github"
            onClick={() => {
              window.open("http://localhost:8080/api/v2/auth/github", "_blank");
            }}
          />
          <img
            src={linkedinLogo}
            alt="Linkedin"
            className="login_withOther-linkedin"
            title="Continue with Linkedin"
            onClick={() => {
              window.open(
                "http://localhost:8080/api/v2/auth/linkedin",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
