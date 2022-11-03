import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaGit,
  FaAws,
} from "react-icons/fa";

const Languages = () => {
  return (
    <div className="languages">
      <a href="/tag" className="language">
        <FaHtml5 />
      </a>
      <a href="/tag" className="language">
        <FaCss3 />
      </a>
      <a href="/tag" className="language">
        <FaJs />
      </a>
      <a href="/tag" className="language">
        <FaNodeJs />
      </a>
      <a href="/tag" className="language">
        <FaPhp />
      </a>
      <a href="/tag" className="language">
        <FaPython />
      </a>
      <a href="/tag" className="language">
        <FaReact />
      </a>
      <a href="/tag" className="language">
        <FaGit />
      </a>
      <a href="/tag" className="language">
        <FaAws />
      </a>
    </div>
  );
};

export default Languages;
