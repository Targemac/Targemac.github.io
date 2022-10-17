import React from "react";
import "../assets/css/landing-page.css";
import { start_your_project } from "./start_your_project";
// import logo from "../assets/images/logo.png";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="wrapper-overlay">
        {/* header starts here   */}
        <header className="landing-wrapper-header">
          <div className="logo-space">
            {/* <img src={logo} alt="" className="logo" /> */}
            <a href="./">
              {" "}
              phoenix <i>store</i>{" "}
            </a>
          </div>
          <nav className="head-btn-space">
            <button className="get-started-btn">get started now</button>
            <button className="login-btn">login</button>
          </nav>
        </header>
        {/* header ends here   */}

        {/* intro starts here  */}
        <div className="intro">
          <p>software development from the best in the industry</p>
          {start_your_project()}
        </div>
        {/* intro ends here  */}
      </div>
    </div>
  );
};

export default LandingPage;
