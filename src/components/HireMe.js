import React from "react";
import data from "../js/data";

const HireMe = () => {
  const projects_done = data.projects_done;

  let n_o_p = 0;
  for (let i = 0; i < projects_done.length; i++) {
    n_o_p++;
  }

  return (
    <div className="hire-me-wrapper">
      {" "}
      <div className="hire-me-wrapper-1">
        <div className="hire-me-wrapper-1-item">
          <div className="hire-me-wrapper-1-item-detail">MERN</div>
          <div className="hire-me-wrapper-1-item-head">stack</div>
        </div>
        <div className="hire-me-wrapper-1-item">
          <div className="hire-me-wrapper-1-item-detail">02+</div>
          <div className="hire-me-wrapper-1-item-head">years of experience</div>
        </div>
        <div className="hire-me-wrapper-1-item">
          <div className="hire-me-wrapper-1-item-detail">{n_o_p}</div>
          <div className="hire-me-wrapper-1-item-head">projects done</div>
        </div>
        <div className="hire-me-wrapper-1-item">
          <div className="hire-me-wrapper-1-item-detail">02</div>
          <div className="hire-me-wrapper-1-item-head">teams</div>
        </div>
      </div>
      <div className="hire-me-wrapper-2">
        <h1>hire me today</h1>
        <a href="/">let's get started</a>
      </div>
    </div>
  );
};

export default HireMe;
