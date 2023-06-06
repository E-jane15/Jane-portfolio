import React from "react";
import "./navbar.css";
import { FiHome } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBookmark />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdPermContactCalendar />
      </a>
    </nav>
  );
};

export default Navbar;
