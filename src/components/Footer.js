import React from "react";
import "../js/index.js";

const Footer = () => {
  const data = {
    date: Date(),
    year: "2023",
  };
  return (
    <div className="footer">
      <p> &copy;{data.year} Targema Charles. All rights reserved.</p>
    </div>
  );
};

export default Footer;
