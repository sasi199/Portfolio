import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";
import { useState } from "react";

function Nav() {
  const [active, setActive] = useState("#");

  return (
    <nav>
      <a
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
        href="#home"
      >
        <AiOutlineHome />
      </a>
      <a
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
      <a
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
        href="#experience"
      >
        <BiBook />
      </a>
      <a
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
        href="#portfolio"
      >
        <RiServiceLine />
      </a>
      <a
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
