import "./navbar.css";
import defaultProfileImage from "../../../src/logo512.png";
import { useDispatch } from "react-redux";
import {
  setShortProfileDisp,
  setShortProfileContainerDisp,
} from "../../actions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="navbar"
      title="Click to view profile"
      onClick={() => {
        dispatch(setShortProfileDisp("shortProfile"));
        dispatch(setShortProfileContainerDisp());
      }}
    >
      <img src={defaultProfileImage} alt={"VP"}></img>
    </div>
  );
};

export default Navbar;
