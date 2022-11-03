import React from "react";

const Footer = () => {
  const data = {
    date: 2022,
  };
  return (
    <div className="footer">
      &copy;{data.date} Targema Charles. All rights reserved.
    </div>
  );
};

export default Footer;
