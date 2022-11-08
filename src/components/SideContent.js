import React from "react";
// import data from "../js/data";

const SideContent = ({ techSkills }) => {
  // const techSkills = data.tech_skills;

  return (
    <div className="side-content">
      <div className="side-cont-wrapper">
        <div className="side-head-1">Technical Skills</div>

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
    </div>
  );
};

export default SideContent;
