import React from "react";

import data from "../js/data";
import photo from "../assets/img/tc.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import $ from "jquery";

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

  return (
    <div className="PersonalSummary">
      <div className="PersonalSummary-sub-1">
        <div className="p-s-s-1-title hidden">get to know me</div>
        <div className="p-s-s-1-body hidden" id="PersonalSummaryBody">
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
          <a href="mailto:tcdevengr@mail.com"><button>Hire me today</button></a>
        </div>
      </div>
      <div className="PersonalSummary-sub-2 ">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default PersonalSummary;
