import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function HeaderSocials(params) {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sasi-kala-m-408207271/" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/sasi199" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com" rel="noreferrer" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
}
export default HeaderSocials;
