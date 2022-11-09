import React, { useEffect, useState } from "react";

import data from "../js/data";
import photo from "../assets/img/tc.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import $ from "jquery";
import axios from "axios";

const PersonalSummary = () => {
  // let stats = $(".p-s-s-1-body-status");
  let text = $("#PersonalSummaryBody");
  let char = $("#char");
  let words = $("#words");
  // let lines = $("#lines");
  let symbols = $("#symbols");

  // counting characters
  let num_char = 0;
  for (let i = 0; i < text.text().length; i++) {
    num_char++;
  }
  char.text(num_char + " Characters");

  //counting words
  let num_words = 0;
  for (let i = 0; i < text.text().split(/\s+/).length; i++) {
    num_words++;
  }
  words.text(num_words + " Words");

  //counting lines
  // let num_lines = 0;
  // for (let i = 0; i < text.text().split("\n").length; i++) {
  //   num_lines++;
  // }
  // lines.text(num_lines + " Lines");

  //counting symbols
  // /[!@#$%^&*+()_-={};:'"<>.,?/]/gi
  let num_symbols = 0;
  for (let i = 0; i < text.text().split(/[.,@-]/gi).length; i++) {
    num_symbols++;
  }
  symbols.text(num_symbols + " Symbols");

  const [testData, setTestData] = useState("this is a sale test");

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/");
        setTestData(res.data.message);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTestData();
  }, []);

  return (
    <div className="PersonalSummary">
      <div className="PersonalSummary-sub-1">
        <div className="p-s-s-1-title">get to know me</div>
        <div className="p-s-s-1-body" id="PersonalSummaryBody">
          {/* <div>{testData}</div> */}
          <span className="custome-quote">
            <FaQuoteLeft />
          </span>{" "}
          {data.personal_summary}{" "}
          <span className="custome-quote">
            <FaQuoteRight />{" "}
          </span>{" "}
        </div>
        <div className="p-s-s-1-body-status">
          <span id="char"></span>
          <span id="words"></span>
          <span id="lines"></span>
          <span id="symbols"></span>
        </div>
        <div className="p-s-s-1-btn">
          <button>Hire me today</button>
        </div>
      </div>
      <div className="PersonalSummary-sub-2 ">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default PersonalSummary;
