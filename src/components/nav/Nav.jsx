import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "./nav.css";

function Nav() {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        onClick={() => setActive("#")}
        className={active === "#" ? "active hover-effect" : "hover-effect"}
        href="#home"
      >
        <AiOutlineHome />
        <span className="text">HOME</span>
      </a>
      <a
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active hover-effect" : "hover-effect"}
        href="#about"
      >
        <AiOutlineUser />
        <span className="text">ABOUT</span>
      </a>
      <a
        onClick={() => setActive("#experience")}
        className={
          active === "#experience" ? "active hover-effect" : "hover-effect"
        }
        href="#experience"
      >
        <BiBook />
        <span className="text">SKILLS</span>
      </a>
      <a
        onClick={() => setActive("#portfolio")}
        className={
          active === "#portfolio" ? "active hover-effect" : "hover-effect"
        }
        href="#portfolio"
      >
        <RiServiceLine />
        <span className="text">PORTFOLIO</span>
      </a>
      <a
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active hover-effect" : "hover-effect"}
        href="#contact"
      >
        <BiMessageSquareDetail />
        <span className="text">CONTACT</span>
      </a>
    </nav>
  );
}

export default Nav;
