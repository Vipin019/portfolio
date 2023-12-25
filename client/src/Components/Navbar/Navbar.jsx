import "./navbar.css";
import defaultProfileImage from "../../../src/logo512.png";
import { useDispatch } from "react-redux";
import {
  setShortProfileDisp,
  setShortProfileContainerDisp,
  setAuthContainerDisp,
  setAuthDisp,
} from "../../actions/index";
// import { useNavigate } from "react-router-dom"; //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

const Navbar = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const loggedin = false;

  return (
    <div
      className="navbar"
      title="Click to view profile"
      onClick={() => {
        if (loggedin) {
          dispatch(setShortProfileDisp("shortProfile"));
          dispatch(setShortProfileContainerDisp());
        } else {
          dispatch(setAuthContainerDisp());
          dispatch(setAuthDisp("auth"));
        }
      }}
    >
      <img src={defaultProfileImage} alt={"VP"}></img>
    </div>
  );
};

export default Navbar;
