import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/jane.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Ebai Enownku Jane</h1>
        <h5 className="text-light">
          {" "}
          Software Engineering Student,Data Analyst and Web developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
