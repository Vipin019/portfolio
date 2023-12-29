import { useState } from "react";
import "./forgetPassword.css";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setForgetState } from "../../actions";
import { TiTick } from "react-icons/ti";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [emailVerified, setEmailVerified] = useState(true);
  const dispatch = useDispatch();

  /**************************************************PASSWORD******/
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState(null);
  const [passwordLevel, setPasswordLevel] = useState("Invalid");
  /*******************************CONFIRM PASSWORD */
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState(null);

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

  return (
    <div className="forget">
      <RxCross2
        className="incorrect forget-icon"
        onClick={() => {
          dispatch(setForgetState(false));
        }}
      />
      {!emailVerified ? (
        <div className="forget_queAndAns flex">
          <div className="forget_queAndAns-warning flex">
            <h6 className="incorrect">
              Warning! you will be given only one chance
            </h6>
          </div>
          <select className="forget_queAndAns-input inpt">
            <option>Select your question</option>
            <option>What is your best book</option>
            <option>What is your best book</option>
            <option>What is your best book</option>
          </select>
          <input
            type="text"
            placeholder="Enter your answer"
            className="forget_queAndAns-input forget_queAndAns-answer inpt"
          />
          {/* -----------------------------------------PASSWORD */}
          <div className="forget_queAndAns_password">
            <div>
              <input
                type={passwordType}
                value={password}
                placeholder="Enter your password"
                maxLength="20"
                className="forget_queAndAns-password inpt"
                require
                onChange={handlePasswordChange}
              />
              <>
                {passwordType === "password" ? (
                  <IoMdEye
                    className="forget_queAndAns_password-icon"
                    title="Show Password"
                    onClick={() => {
                      setPasswordType("text");
                    }}
                  />
                ) : (
                  <IoMdEyeOff
                    className="forget_queAndAns_password-icon"
                    title="Hide Password"
                    onClick={() => {
                      setPasswordType("password");
                    }}
                  />
                )}
              </>
              <>
                {passwordLevel === "Strong" ? (
                  <TiTick className="forget_queAndAns_password-icon m-xpoint2rem correct" />
                ) : (
                  <MdInfo
                    className="forget_queAndAns_password-icon m-xpoint2rem"
                    title={
                      <>
                        <p>
                          Password shold be minium 6 character long and maximum
                          20 character long. For strong password it should be
                          mimium 8 character long and it should contain at least
                          1 upper case latter 1 lower case latter 1 number 1
                          special character (eg. @,#,$...).
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
          <div className="forget_queAndAns_password">
            <div>
              <input
                type={confirmPasswordType}
                value={confirmPassword}
                placeholder="Enter password again"
                maxLength="20"
                className="forget_queAndAns_password inpt"
                require
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <>
                {confirmPassword === password && password?.length >= 6 ? (
                  <TiTick className="forget_queAndAns_password-icon correct" />
                ) : confirmPasswordType === "password" ? (
                  <IoMdEye
                    className="forget_queAndAns_password-icon"
                    title="Show Password"
                    onClick={() => {
                      setConfirmPasswordType("text");
                    }}
                  />
                ) : (
                  <IoMdEyeOff
                    className="forget_queAndAns_password-icon"
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
          <input type="button" value="Reset Password" className="btn" />
        </div>
      ) : (
        <div className="forget-byemail">
          <p>{"We have sent an"}</p>
          <p>email please follow</p>
          <p>the email to reset</p>
          <p>your password</p>
          <input
            type="button"
            value={"Click here to open gmail"}
            className="btn forget-byemail--button"
            onClick={() => {
              window.location.href = "https://mail.google.com/";
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
