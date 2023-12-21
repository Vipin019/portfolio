import "./navbar.css";
import defaultProfileImage from "../../../src/logo512.png";

const Navbar = ({
  shortProfileContainerDisp,
  setShortProfileContainerDisp,
  setShortProfileDisp,
}) => {
  return (
    <div
      className="navbar"
      title="Click to view profile"
      onClick={(e) => {
        setShortProfileDisp("shortProfile");
        setShortProfileContainerDisp(
          shortProfileContainerDisp === "shortProfile_container"
            ? "shortProfile_container-h"
            : "shortProfile_container"
        );
      }}
    >
      <img src={defaultProfileImage} alt={"VP"}></img>
    </div>
  );
};

export default Navbar;
