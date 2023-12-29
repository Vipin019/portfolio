import "./forgetPassword.css";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { toast } from "react-toastify";

const ForgetPassword = () => {
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
    <div className="flex forgetPassword">
      <div className="flex forgetPassword_container">
        <div className="flex forgetPassword_container-heading">
          <h6>Forget Password</h6>
        </div>
        {/* -----------------------------------------PASSWORD */}
        <div className="forgetPassword_container_password">
          <div>
            <input
              type={passwordType}
              value={password}
              placeholder="Enter your password"
              maxLength="20"
              className="forgetPassword_container-password inpt"
              require
              onChange={handlePasswordChange}
            />
            <>
              {passwordType === "password" ? (
                <IoMdEye
                  className="forgetPassword_container_password-icon"
                  title="Show Password"
                  onClick={() => {
                    setPasswordType("text");
                  }}
                />
              ) : (
                <IoMdEyeOff
                  className="forgetPassword_container_password-icon"
                  title="Hide Password"
                  onClick={() => {
                    setPasswordType("password");
                  }}
                />
              )}
            </>
            <>
              {passwordLevel === "Strong" ? (
                <TiTick className="forgetPassword_container_password-icon m-xpoint2rem correct" />
              ) : (
                <MdInfo
                  className="forgetPassword_container_password-icon m-xpoint2rem"
                  title={
                    <>
                      <p>
                        Password shold be minium 6 character long and maximum 20
                        character long. For strong password it should be mimium
                        8 character long and it should contain at least 1 upper
                        case latter 1 lower case latter 1 number 1 special
                        character (eg. @,#,$...).
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
        <div className="forgetPassword_container_password">
          <div>
            <input
              type={confirmPasswordType}
              value={confirmPassword}
              placeholder="Enter password again"
              maxLength="20"
              className="forgetPassword_container_password inpt"
              require
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <>
              {confirmPassword === password && password?.length >= 6 ? (
                <TiTick className="forgetPassword_container_password-icon correct" />
              ) : confirmPasswordType === "password" ? (
                <IoMdEye
                  className="forgetPassword_container_password-icon"
                  title="Show Password"
                  onClick={() => {
                    setConfirmPasswordType("text");
                  }}
                />
              ) : (
                <IoMdEyeOff
                  className="forgetPassword_container_password-icon"
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
        <input type="button" value={"Reset Password"} className="btn" />
      </div>
    </div>
  );
};

export default ForgetPassword;
