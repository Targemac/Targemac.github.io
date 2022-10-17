import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <p>just say the magical words and we will do the rest.</p>
      <p>
        <a href="./">start your project </a>
      </p>
      <div className="footer-link-grps">
        <div className="footer-link-grp">
          <a href="/">privacy policy</a>
          <a href="/">terms of service</a>
          <a href="/">contact</a>
        </div>
        <div className="footer-link-grp">
          <a href="twitter">twitter</a>
          <a href="twitter">linkein</a>
        </div>
      </div>

      <div className="footer-copyright">&copy;2022 copyrights reserved.</div>
    </footer>
  );
};

export default Footer;
