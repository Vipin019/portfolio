import "./navbar.css";
import defaultProfileImage from "../../../src/logo512.png";

const Navbar = () => {
  return (
    <div className="navbar" title="Click to view profile">
      <img src={defaultProfileImage} alt={"VP"}></img>
    </div>
  );
};

export default Navbar;
