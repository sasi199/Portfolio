import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import  Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>SASI KALA</h1>
        <div className="text-light">
          <Typewriter
            options={{
              strings: [ 
              "Developer",
              "Deep Learning Engineer",
              "Full Stack Developer",
              "Open Source Contributor"
            ],
              autoStart: true,
              loop: true,
              deleteSpeed :50
            }}
          />
        </div>
        <CTA />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
}

export default Header;
