import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";
import { FiAward } from "react-icons/fi";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2> Me More</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about-icon" />
              <h5> Experience</h5>
              <small>1 year experience </small>
            </article>

            <article className="about__card">
              <BiUserPlus className="about-icon" />
              <h5> Clients</h5>
              <small>30 nationwide </small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className="about-icon" />
              <h5> Projects</h5>
              <small> 18+ finished</small>
            </article>
          </div>

          <p>
            I am a L300 student at the University Buea studying software
            engineering under the Faculty of Engineering and Technology. I have
            grown these skills over time and I look forward to handling all of
            your worries. Client Satisfaction is my top priority.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's link up
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
