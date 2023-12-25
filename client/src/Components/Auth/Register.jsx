import "./register.css";
import googleLogo from "../../Images/googleLogo.png";
import githubLogo from "../../Images/githubLogo.png";
import linkedinLogo from "../../Images/linkedinLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { RiLoader2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../actions/index";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /*******************************************************ID******/
  const [id, setId] = useState(null);
  const [idChecking, setIdChecking] = useState(false);
  const [isIdCorrect, setIsIdCorrect] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailAlreadyReg, setIsEmailAlreadyReg] = useState(false);
  const [isIdAvilable, setIsIdAvilavle] = useState(false);
  /**************************************************PASSWORD******/
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState(null);
  const [passwordLevel, setPasswordLevel] = useState("Weak");
  /*******************************CONFIRM PASSWORD */
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState(null);
  return (
    <div>
      <>
        <div className="register">
          <div className="register_registerInfo">
            {/* ---------------------------------------------ID */}
            <div className="register_registerInfo_id">
              <div>
                <input
                  type="text"
                  value={id}
                  placeholder="Enter your email or userId"
                  maxLength="25"
                  className="register_registerInfo-id inpt"
                  require
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
                <>
                  {isEmail === true ? (
                    ""
                  ) : id === null ? (
                    <MdInfo
                      className="register_registerInfo_id-icon"
                      title="If your are entering user ID please make it atleast 2 character long"
                    />
                  ) : idChecking === true ? (
                    <RiLoader2Line className="register_registerInfo_id-icon" />
                  ) : isIdCorrect === true ? (
                    <TiTick className="register_registerInfo_id-icon" />
                  ) : (
                    <RxCross2
                      className="register_registerInfo_id-icon"
                      onClick={() => {
                        setId("");
                      }}
                    />
                  )}
                </>
              </div>
              <small>
                {isEmail === true
                  ? isEmailAlreadyReg
                    ? "Email already registred please login."
                    : "This fild is required *"
                  : id === null
                  ? "This fild is required *"
                  : isIdCorrect
                  ? isIdAvilable
                    ? "User I is avilable"
                    : "This user ID is already taken."
                  : "Incorrect user ID."}
              </small>
            </div>
            {/* -----------------------------------------PASSWORD */}
            <div className="register_registerInfo_password">
              <div>
                <input
                  type={passwordType}
                  value={password}
                  placeholder="Enter your password"
                  maxLength="20"
                  className="register_registerInfo-password inpt"
                  require
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <>
                  {passwordType === "password" ? (
                    <IoMdEye
                      className="register_registerInfo_password-icon"
                      title="Show Password"
                      onClick={() => {
                        setPasswordType("text");
                      }}
                    />
                  ) : (
                    <IoMdEyeOff
                      className="register_registerInfo_password-icon"
                      title="Hide Password"
                      onClick={() => {
                        setPasswordType("password");
                      }}
                    />
                  )}
                </>
                <>
                  {passwordLevel === "Strong" ? (
                    <TiTick className="register_registerInfo_password-icon m-xpoint2rem" />
                  ) : (
                    <MdInfo
                      className="register_registerInfo_password-icon m-xpoint2rem"
                      title={
                        <>
                          <p>
                            Password shold be minium 6 character long and
                            maximum 20 character long. For strong password it
                            should be mimium 8 character long and it should
                            contain at least 1 upper case latter 1 lower case
                            latter 1 number 1 special character (eg. @,#,$...).
                          </p>
                        </>
                      }
                    />
                  )}
                </>
              </div>
              <small>
                {password === null
                  ? "Password is required *"
                  : password?.length < 6
                  ? "Password should be minium 6 character long"
                  : passwordLevel + " password"}
              </small>
            </div>
            {/* -----------------------------------------CONFIRM PASSWORD */}
            <div className="register_registerInfo_password">
              <div>
                <input
                  type={confirmPasswordType}
                  value={confirmPassword}
                  placeholder="Enter password again"
                  maxLength="20"
                  className="register_registerInfo-password inpt"
                  require
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <>
                  {confirmPassword === password && password?.length >= 6 ? (
                    <TiTick />
                  ) : confirmPasswordType === "password" ? (
                    <IoMdEye
                      className="register_registerInfo_password-icon"
                      title="Show Password"
                      onClick={() => {
                        setConfirmPasswordType("text");
                      }}
                    />
                  ) : (
                    <IoMdEyeOff
                      className="register_registerInfo_password-icon"
                      title="Hide Password"
                      onClick={() => {
                        setConfirmPasswordType("password");
                      }}
                    />
                  )}
                </>
              </div>
              <small>
                {confirmPassword === null
                  ? "Confirm your password *"
                  : confirmPassword === password && password?.length >= 6
                  ? "Password matched."
                  : "Password and confirm password should be same."}
              </small>
            </div>
          </div>
          <input
            type="button"
            value="Sign Up"
            className="register-signInButton btn"
          />
          <div className="register_signUp">
            <p>Already registred</p>
            <input
              type="button"
              value="Sign In"
              className="register_signUp-signUpButton btn"
              onClick={() => {
                dispatch(setAuthState("login"));
              }}
            />
          </div>
          <p>Or</p>
          <div className="register_withOther">
            <img
              src={googleLogo}
              alt="Google"
              className="register_withOther-google"
              title="Continue with Google"
              onClick={() => {
                window.open(
                  "http://localhost:8080/api/v2/auth/google",
                  "_blank"
                );
              }}
            />
            <img
              src={githubLogo}
              alt="Github"
              className="register_withOther-github"
              title="Continue with Github"
              onClick={() => {
                window.open(
                  "http://localhost:8080/api/v2/auth/github",
                  "_blank"
                );
              }}
            />
            <img
              src={linkedinLogo}
              alt="Linkedin"
              className="register_withOther-linkedin"
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
    </div>
  );
};

export default Register;
