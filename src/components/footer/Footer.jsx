import React from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";


function Footer() {
  var year =new Date().getFullYear();
  return (
    <footer>
      <a href="#name" className="footer__logo">
        SASI
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__social">
        <a href="https://www.facebook.com"  rel="noreferrer" target="_blank">
          <IoLogoFacebook />
        </a>
        <a href="https://instagram.com"  rel="noreferrer" target="_blank">
          <IoLogoInstagram />
        </a>
        <a href="https://twitter.com"  rel="noreferrer" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://www.youtube.com/"  rel="noreferrer" target="_blank">
          <IoLogoYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {year} </small>
      </div>
    </footer>
  );
}

export default Footer;
