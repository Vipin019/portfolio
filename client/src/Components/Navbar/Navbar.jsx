import "./navbar.css";
import defaultProfileImage from "../../../src/logo512.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setShortProfileDisp,
  setShortProfileContainerDisp,
  setAuthContainerDisp,
  setAuthDisp,
} from "../../actions/index";
import { useState } from "react";
// import { useNavigate } from "react-router-dom"; //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

const Navbar = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [auth, setAuth] = useState("auth-h");

  const loginState = useSelector((state) => {
    return state.setLoginState;
  });
  const authDisp = useSelector((state) => {
    return state.setAuthDisp;
  });

  return (
    <div
      className="navbar"
      title="Click to view profile"
      onClick={async () => {
        if (loginState) {
          dispatch(setShortProfileDisp("shortProfile"));
          dispatch(setShortProfileContainerDisp());
        } else {
          dispatch(setAuthContainerDisp());
          if (authDisp === "auth") {
            setTimeout(() => {
              dispatch(setAuthDisp("auth-h"));
            }, 500);
          } else {
            dispatch(setAuthDisp("auth"));
          }
        }
      }}
    >
      <img src={defaultProfileImage} alt={"VP"}></img>
    </div>
  );
};

export default Navbar;
