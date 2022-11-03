import React from "react";

import data from "../js/data";
import photo from "../assets/img/tc.jpg"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const PersonalSummary = () => {
  return (
    <div className="PersonalSummary">
      <div className="PersonalSummary-sub-1">
        <div className="p-s-s-1-title">about me</div>
        <div className="p-s-s-1-body">
          <span className="custome-quote">
            <FaQuoteLeft />
          </span>{" "}
          {data.personal_summary}{" "}
          <span className="custome-quote">
            <FaQuoteRight />{" "}
          </span>{" "}
        </div>
        <div className="p-s-s-1-btn">
          <button>Hire me today</button>
        </div>
      </div>
      <div className="PersonalSummary-sub-2">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default PersonalSummary;
