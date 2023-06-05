import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsBook } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CgProfile />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a
        href="#featured"
        onClick={() => setActiveNav("#featured")}
        className={activeNav === "#featured" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
