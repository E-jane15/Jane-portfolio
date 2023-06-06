import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href=" https://linkedin.com" target="__blank">
        {" "}
        <BsLinkedin />
      </a>
      <a href=" https://github.com" target="__blank">
        <BsGithub />
      </a>
      <a href=" https://twitter.com" target="__blank">
        {" "}
        <FiTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
