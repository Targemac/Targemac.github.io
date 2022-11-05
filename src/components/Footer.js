import React from "react";
import "../js/index.js";

const Footer = () => {
  const data = {
    date: 2022,
  };
  return (
    <div className="footer">
      <p> &copy;{data.date} Targema Charles. All rights reserved.</p>

      <div id="location"></div>
      <script src="../js/index.js"></script>
    </div>
  );
};

export default Footer;
