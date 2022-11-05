import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <a href="/#top">
      <div className="ScrollToTop">
        <FaArrowUp />{" "}
      </div>
    </a>
  );
};

export default ScrollToTop;
