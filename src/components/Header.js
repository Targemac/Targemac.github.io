import React from "react";
import $ from "jquery";

import {
  FaGithub,
  FaLocationArrow,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaAlignJustify,
} from "react-icons/fa";

const Header = () => {
  const handleToggle = () => {
    $(".nav-box-2").slideToggle();
  };

  return (
    <>
      <header className="main-header">
        <div className="logo-box">
          <a href="/">Targema Charles</a>{" "}
        </div>
        <nav className="nav-box">
          <a
            href="https://github.com/Targemac"
            rel="noreferrer"
            target="_blank"
          >
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
          <a
            href="/"
            download="../assets/web-dev cv.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <FaDownload /> Download CV
          </a>
        </nav>
        <div onClick={handleToggle} className="toggle-btn-box">
          <FaAlignJustify />
        </div>
      </header>
      <nav className="nav-box-2">
        <a href="https://github.com/Targemac" rel="noreferrer" target="_blank">
          <FaGithub /> Github
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://twitter.com/TargemaCharles"
          rel="noreferrer"
          target="_blank"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/charles-targema-b5bab1162/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a href="mailto:tcdevengr@gmail.com" rel="noreferrer" target="_blank">
          <FaEnvelope /> Email
        </a>
        <a href="tel:+2348097866451" rel="noreferrer" target="_blank">
          <FaPhone /> Phone
        </a>
        <a href="/" rel="noreferrer" target="_blank">
          <FaLocationArrow /> Abuja, Nigeria
        </a>
        <a href="/" download="../assets/web-dev cv.pdf">
          <FaDownload /> Download CV
        </a>
      </nav>
    </>
  );
};

export default Header;
