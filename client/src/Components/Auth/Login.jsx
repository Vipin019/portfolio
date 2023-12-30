import "./login.css";
import googleLogo from "../../Images/googleLogo.png";
import githubLogo from "../../Images/githubLogo.png";
import linkedinLogo from "../../Images/linkedinLogo.png";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthContainerDisp,
  setAuthDisp,
  setAuthState,
  setForgetState,
  setLoginState,
  setEmailVerified,
  setAuthId,
} from "../../actions/index";
import { toast } from "react-toastify";
import axios from "axios";
import { RiLoader2Line } from "react-icons/ri";

const Login = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const [isEmail, setIsEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const emailVerified = useSelector((state) => {
    return state.setEmailVerified;
  });

  function removeSpace(s) {
    let ans = "";
    let i = 0;
    for (let val of s) {
      if (val !== " ") {
        ans += val;
      }
    }
    return ans;
  }

  const handleIdChange = async (e) => {
    try {
      const val = removeSpace(e.target.value);
      setId(val);
      dispatch(setAuthId(val));
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(val);
      setIsEmail(isValid);
      if (isValid) {
        const response = await axios.post(
          "http://localhost:8080/api/v2/auth/email-registred",
          {
            email: val,
          }
        );
        if (
          response?.data?.success &&
          response?.data?.data?.data?.emailVerified
        ) {
          // console.log(response?.data?.data?.data?.emailVerified);
          dispatch(setEmailVerified(true));
        } else {
          dispatch(setEmailVerified(false));
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };
  const handleOnSignIn = async () => {
    try {
      setIsLoading(true);
      if (
        isEmail &&
        id !== null &&
        password !== null &&
        id !== "" &&
        password !== ""
      ) {
        const res = await axios.post(
          "http://localhost:8080/api/v2/auth/login/email-password",
          {
            email: id,
            password,
          }
        );
        if (res?.data?.success) {
          dispatch(setAuthContainerDisp());
          setTimeout(() => {
            dispatch(setAuthDisp("auth-h"));
            dispatch(setLoginState(true));
          }, 500);

          toast.success(res?.data?.message);
        } else {
          toast.error(res?.data?.message || "Sorry something went wrong");
        }
      } else if (
        id !== null &&
        password !== null &&
        id !== "" &&
        password !== ""
      ) {
        const res = await axios.post(
          "http://localhost:8080/api/v2/auth/login",
          {
            userId: id,
            password,
          }
        );
        if (res?.data?.success) {
          dispatch(setAuthContainerDisp());
          setTimeout(() => {
            dispatch(setAuthDisp("auth-h"));
            dispatch(setLoginState(true));
          }, 500);
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.data?.message || "Sorry some thing went wrong");
        }
      } else if (id === null || id === "") {
        toast.error("Please enter user id or email");
      } else if (password === null || password === "") {
        toast.error("Please enter password");
      } else {
        toast.error("Something went wrong");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setIsLoading(false);
    }
  };

  const handleOnForget = async () => {
    try {
      if (emailVerified) {
        const res = await axios.post(
          "http://localhost:8080/api/v2/auth/password/forget/send-email",
          {
            email: id,
          }
        );
        if (res?.data?.success) {
          dispatch(setForgetState(true));
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.data?.message);
        }
      } else {
        dispatch(setForgetState(true));
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login_loginInfo">
          <input
            type="text"
            value={id}
            placeholder="Enter your email or userId"
            maxLength="25"
            className="login_loginInfo-id inpt"
            require
            onChange={handleIdChange}
          />
          <div className="login_loginInfo_password">
            <input
              type={passwordType}
              value={password}
              placeholder="Enter your password"
              maxLength="20"
              className="login_loginInfo-password inpt"
              require
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
          onClick={handleOnForget}
        />
        {isLoading ? (
          <div className="login-signInButton btn">
            <RiLoader2Line className="rotate-infinit" />
          </div>
        ) : (
          <input
            type="button"
            value="Sign In"
            className="login-signInButton btn"
            onClick={handleOnSignIn}
          />
        )}

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
