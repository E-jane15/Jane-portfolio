import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/jane_ebai/" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/Jane Ebai" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jane Ebai All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
