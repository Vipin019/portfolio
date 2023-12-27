import "./register.css";
import googleLogo from "../../Images/googleLogo.png";
import githubLogo from "../../Images/githubLogo.png";
import linkedinLogo from "../../Images/linkedinLogo.png";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { RiLoader2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  setAuthContainerDisp,
  setAuthDisp,
  setAuthState,
  setLoginState,
} from "../../actions/index";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [onClickLoading, setOnClickLoading] = useState(null);
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
  const [passwordLevel, setPasswordLevel] = useState("Invalid");
  /*******************************CONFIRM PASSWORD */
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState(null);

  function removeSpace(s) {
    let ans = "";
    for (let val of s) {
      if (val !== " ") {
        ans += val;
      }
    }
    return ans;
  }

  const handleIdChange = async (e) => {
    try {
      setIdChecking(true);
      const val = removeSpace(e.target.value);
      setId(val);
      //email validation
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(e.target.value);
      setIsEmail(isValid);
      //is email already registred
      if (isValid) {
        const response = await axios.post(
          "http://localhost:8080/api/v2/auth/email-registred",
          {
            email: val,
          }
        );
        setIdChecking(false);
        setIsEmailAlreadyReg(response?.data?.success);
      } else if (val.length < 2) {
        setIsIdCorrect(false);
      } else {
        setIdChecking(true);
        setIsIdCorrect(true);
        const response = await axios.post(
          "http://localhost:8080/api/v2/auth/userid-registred",
          {
            userId: val,
          }
        );

        setIsIdAvilavle(!response?.data?.success);
      }
      setIdChecking(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
      setIdChecking(false);
    }
  };

  function isUpperCase(s) {
    for (let val of s) {
      if (val === val.toUpperCase()) {
        return true;
      }
    }
    return false;
  }
  function isLowerCase(s) {
    for (let val of s) {
      if (val === val.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  function isNumber(s) {
    for (let val of s) {
      if (
        val === "0" ||
        val === "1" ||
        val === "2" ||
        val === "3" ||
        val === "4" ||
        val === "5" ||
        val === "6" ||
        val === "7" ||
        val === "8" ||
        val === "9"
      ) {
        return true;
      }
    }
    return false;
  }

  function isSpecialChar(s) {
    for (let val of s) {
      if (
        val === "`" ||
        val === "!" ||
        val === "@" ||
        val === "#" ||
        val === "$" ||
        val === "%" ||
        val === "^" ||
        val === "&" ||
        val === "*" ||
        val === "(" ||
        val === ")" ||
        val === "-" ||
        val === "_" ||
        val === "+" ||
        val === "=" ||
        val === "{" ||
        val === "[" ||
        val === "}" ||
        val === "]" ||
        val === ":" ||
        val === ";" ||
        val === "'" ||
        val === '"' ||
        val === "<" ||
        val === "," ||
        val === ">" ||
        val === "." ||
        val === "?" ||
        val === "/" ||
        val === "~" ||
        val === "|"
      ) {
        return true;
      }
    }
    return false;
  }

  const handlePasswordChange = async (e) => {
    try {
      setPassword(e.target.value);
      if (
        e.target.value.length >= 8 &&
        isUpperCase(e.target.value) &&
        isLowerCase(e.target.value) &&
        isNumber(e.target.value) &&
        isSpecialChar(e.target.value)
      ) {
        setPasswordLevel("Strong");
      } else if (e.target.value.length >= 6) {
        setPasswordLevel("Weak");
      } else {
        setPasswordLevel("Invalid");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  /***********************************************HANDLESIGNUP */
  const handleSignUp = async () => {
    try {
      setOnClickLoading(true);
      if (
        isEmail &&
        passwordLevel !== "invalid" &&
        password === confirmPassword &&
        id !== null &&
        password !== null &&
        confirmPassword !== null
      ) {
        const response = await axios.post(
          "http://localhost:8080/api/v2/auth/register/email-password",
          {
            email: id,
            password,
          }
        );
        if (response?.data?.success) {
          dispatch(setAuthContainerDisp());
          setInterval(() => {
            dispatch(setAuthDisp("auth-h"));
            dispatch(setLoginState(true));
          }, 500);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else if (
        passwordLevel !== "Invalid" &&
        password === confirmPassword &&
        id !== null &&
        password !== null &&
        confirmPassword !== null
      ) {
        const response = await axios.post(
          "http://localhost:8080/api/v2/auth/register",
          {
            userId: id,
            password: password,
          }
        );
        if (response?.data?.success) {
          dispatch(setAuthContainerDisp());
          setInterval(() => {
            dispatch(setAuthDisp("auth-h"));
            dispatch(setLoginState(true));
          }, 500);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else if (id === null) {
        toast.error("Please fill the user Id or email.");
      } else if (password === null) {
        toast.error("Please fill the password.");
      } else if (confirmPassword === null) {
        toast.error("Please confirm password.");
      } else if (password !== confirmPassword) {
        toast.error("Password and confirm password are not same.");
      } else {
        toast.error("Sorry something went wrong.");
      }
      setOnClickLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong please try again.");
      setOnClickLoading(false);
    }
  };

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
                  onChange={handleIdChange}
                />
                <>
                  {isEmail === true ? (
                    idChecking ? (
                      <RiLoader2Line className="register_registerInfo_id-icon rotate-infinit" />
                    ) : isEmailAlreadyReg ? (
                      <RxCross2
                        className="register_registerInfo_id-icon incorrect"
                        onClick={() => {
                          setId(" ");
                          setIsEmail(false);
                          setIsEmailAlreadyReg(false);
                        }}
                      />
                    ) : (
                      <TiTick className="register_registerInfo_id-icon correct" />
                    )
                  ) : id === null || id === "" ? (
                    <MdInfo
                      className="register_registerInfo_id-icon"
                      title="If your are entering user ID please make it atleast 2 character long wihout space."
                    />
                  ) : idChecking === true ? (
                    <RiLoader2Line className="register_registerInfo_id-icon rotate-infinit" />
                  ) : isIdCorrect === true ? (
                    isIdAvilable ? (
                      <TiTick className="register_registerInfo_id-icon correct" />
                    ) : (
                      <RxCross2
                        className="register_registerInfo_id-icon incorrect"
                        onClick={() => {
                          setId("");
                          setIsEmail(false);
                          setIsEmailAlreadyReg(false);
                        }}
                      />
                    )
                  ) : (
                    <RxCross2
                      className="register_registerInfo_id-icon incorrect"
                      onClick={() => {
                        setId("");
                        setIsEmail(false);
                        setIsEmailAlreadyReg(false);
                      }}
                    />
                  )}
                </>
              </div>
              <small>
                {isEmail === true
                  ? isEmailAlreadyReg
                    ? "Email already registred please login."
                    : " "
                  : id === null || id === ""
                  ? "This fild is required *"
                  : isIdCorrect
                  ? isIdAvilable
                    ? "User Id is avilable"
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
                  onChange={handlePasswordChange}
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
                    <TiTick className="register_registerInfo_password-icon m-xpoint2rem correct" />
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
                    <TiTick className="register_registerInfo_password-icon correct" />
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
          {onClickLoading ? (
            <div className="register-signInButton btn">
              <RiLoader2Line className="rotate-infinit" />
            </div>
          ) : (
            <input
              type="button"
              value="Sign Up"
              className="register-signInButton btn"
              onClick={handleSignUp}
            />
          )}
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
