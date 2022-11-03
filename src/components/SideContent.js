import React from "react";
import { FaCode, FaBook, FaUser } from "react-icons/fa";
import data from "../js/data";

const SideContent = (props) => {
  const techSkills = data.tech_skills;
  const education = data.education;
  const personal_det = data.personal_details;

  

  return (
    <div className="side-content" >
      <div className="side-head-1">
        <FaCode /> Technical Skills:
      </div>
      <hr />
      {techSkills.map((item, index) => (
        <span key={index} className="minimize">
          <div key={item.id} className="side-head-2">
            {item.skillName}:
          </div>
          {item.list.map((e, index, arr) => (
            <div key={e} className="side-body">
              {e}
            </div>
          ))}
        </span>
      ))}
      <br />
      <br />
      <div className="side-head-1">
        <FaBook /> Education:
      </div>
      <hr />
      <span className="minimize">
        {education.map(
          (item, index) =>
            index === 1 && (
              <div key={item} className="side-body">
                {item}
                <br />
                <br />
              </div>
            )
        )}
      </span>

      <div className="side-head-1">
        <FaUser /> Personal Details:
      </div>
      <hr />

      <div className="side-body">Age: {personal_det.age}</div>
      <div className="side-body">Gender: {personal_det.gender}</div>
      <div className="side-body">Language: {personal_det.lanugage}</div>
      <div className="side-body">Marital Status: {personal_det.status}</div>
    </div>
  );
};

export default SideContent;
