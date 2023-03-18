import React from "react";
import { FaArrowUp } from "react-icons/fa";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const mybtn = document.getElementById("ScrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybtn.style.display = "flex";
  } else {
    mybtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const ScrollToTop = () => {
  return (
    <div className="ScrollToTop" id="ScrollToTop" onClick={topFunction}>
      <FaArrowUp />{" "}
    </div>
  );
};

export default ScrollToTop;
