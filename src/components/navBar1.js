import React from "react";
import {
  FaGithub,
  FaLocationArrow,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";

const navBar1 = () => {
  return (
    <nav className="nav-box">
      <a href="https://github.com/Targemac" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="/" rel="noreferrer" target="_blank">
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/TargemaCharles"
        rel="noreferrer"
        target="_blank"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/charles-targema-b5bab1162/"
        rel="noreferrer"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:tcdevengr@gmail.com" rel="noreferrer" target="_blank">
        <FaEnvelope />
      </a>
      <a href="tel:+2348097866451" rel="noreferrer" target="_blank">
        <FaPhone />
      </a>
      <a href="/" rel="noreferrer" target="_blank">
        <FaLocationArrow /> Abuja, Nigeria
      </a>
      <a href="/" download="../assets/web-dev cv.pdf">
        <FaDownload /> Download CV
      </a>
    </nav>
  );
};
export default navBar1;
