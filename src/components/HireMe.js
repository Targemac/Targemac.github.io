import axios from "axios";
import React, { useState, useEffect } from "react";
// import data from "../js/data";

const HireMe = ({ baseURL }) => {
  // const projects_done = data.projects_done;
  // let n_o_p = 0;
  // for (let i = 0; i < projects_done.length; i++) {
  //   n_o_p++;
  // }
  // const baseURL = props.baseURL;
  const [n_o_p, setN_o_p] = useState([10]);

  useEffect(() => {
    const getNOP = async () => {
      try {
        const response = await axios.get(`${baseURL}projects`);
        setN_o_p(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };
    return () => {
      getNOP();
    };
  }, [baseURL]);

  return (
    <div className="hire-me-wrapper">
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
        <a href="mailto:tcdevengr@gmail.com">let's get started</a>
      </div>
    </div>
  );
};

export default HireMe;
