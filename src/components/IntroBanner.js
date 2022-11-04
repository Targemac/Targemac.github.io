import React from "react";
import {
  FaCode,
  FaCoffee,
  FaBookReader,
  FaBed,
  FaQuoteLeft,
  FaQuoteRight,FaMusic
} from "react-icons/fa";

const IntroBanner = () => {
  return (
    <div className="IntroBanner">
      <div className="hobbies">
        <div className="hobbie">
          <FaBookReader />
        </div>
        <div className="hobbie">
          <FaCoffee />
        </div>
        <div className="hobbie">
          <FaCode />
        </div>
        <div className="hobbie">
          <FaBed />
        </div>
      </div>
      <div className="introText">full stack web developer</div>
      <div className="introText-sub">
        {" "}
        <FaQuoteLeft /> <FaMusic/> can't burn the bridge just to light my way{" "}
        <FaQuoteRight />{" "}
      </div>
    </div>
  );
};

export default IntroBanner;