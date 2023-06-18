import React from "react";
import ME from "../../assets/space man.png";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";

function About(params) {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Work</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Developer</h5>
              <small>React Developer</small>
            </article>
            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed </small>
            </article>
          </div>
          <p>
          Hi, I'm a web developer fresher with a passion for building websites and web applications.
          I have recently graduated from college/coding bootcamp and have foundational knowledge of programming concepts and languages such as HTML, CSS, and JavaScript.
          I am a fast learner and always looking to improve my skills.
           I am excited to start my career as a web developer and contribute to creating innovative digital solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
