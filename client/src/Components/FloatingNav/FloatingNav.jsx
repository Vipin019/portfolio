import "./floatingNav.css";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";
import { ImBlog } from "react-icons/im";

const FloatingNav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        title="Scroll Up"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        title="About"
      >
        <CgProfile />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        title="Experiences"
      >
        <BsBook />
      </a>
      <a
        href="#featured"
        onClick={() => setActiveNav("#featured")}
        className={activeNav === "#featured" ? "active" : ""}
        title="Features"
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        title="Contact"
      >
        <MdContactPhone />
      </a>
      <a
        href="/blog"
        onClick={() => setActiveNav("#blog")}
        className={activeNav === "#blog" ? "active" : ""}
        title="View Blogs"
      >
        <ImBlog />
      </a>
    </nav>
  );
};

export default FloatingNav;
