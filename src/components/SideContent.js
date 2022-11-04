import React from "react";
import { FaCode, FaBook, FaUser } from "react-icons/fa";
import data from "../js/data";

const SideContent = (props) => {
  const techSkills = data.tech_skills;
  const education = data.education;
  const personal_det = data.personal_details;

  return (
    <div className="side-content">
      <div className="side-head-1">
        <FaCode /> Technical Skills:
      </div>
      <hr />
      <div className="techskill-grp">
        {techSkills.map((item, index) => (
          <div key={index} className="techskill">
            <div key={item.id} className="side-head-2">
              {item.skillName}
            </div>
            {item.list.map((e, index, arr) => (
              <div key={e} className="side-body">
                {e}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideContent;
