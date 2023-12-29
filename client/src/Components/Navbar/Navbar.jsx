import "./navbar.css";
import { AiOutlineLogin } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import defaultProfile from "../../Images/default-avatar.jpg";
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
  const [profileImage, aetProfileImage] = useState(defaultProfile);

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
      {loginState === true ? (
        <img src={profileImage} alt={"VP"}></img>
      ) : (
        <AiOutlineLogin className="navbar-icon" />
      )}
    </div>
  );
};

export default Navbar;
