import React from "react";
import data from "../js/data.js";
import { FaCheckCircle, FaUpload } from "react-icons/fa";

import movieAppPic from "../assets/img/project-img1.png";

// const i_frame_style = {
//   width: "100%",
//   height: "300px",
//   overflow: "show",
// };

const Projects = () => {
  const projects = data.projects_done;
  return (
    <>
      <div className="projects">
        <div className="projects-head">projects</div>
        <div className="project-grp">
          {projects.map((project, index) => {
            return (
              <div key={index} className="project-box">
                {project.img ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <div className="project-box-img">
                      <img src={project.img} alt="" />
                    </div>
                  </a>
                ) : (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <div className="project-box-img">
                      <img src={movieAppPic} alt="" />
                    </div>
                  </a>
                )}

                <a href={project.link} target="_blank" rel="noreferrer">
                  <div className="project-box-title">
                    <span className="project-number">{`0${index + 1}`}</span>{" "}
                    &nbsp;
                    {project.title}{" "}
                  </div>
                </a>

                <div className="project-box-desc">
                  {project.description ? project.description : "..."}
                  <ul>
                    {project.tech_used
                      ? project.tech_used.map((tech) => <li>{tech} </li>)
                      : "..."}
                  </ul>
                </div>

                <div className="project-progress-bar">
                  {project.status === "completed" ? (
                    <span className="progress-bar-completed">
                      <FaCheckCircle /> Completed
                    </span>
                  ) : project.status === "InProgress" ? (
                    <span className="progress-bar-InProgress">
                      <FaUpload /> In Progress...
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* <p>
          <iframe
            id="iFrameBox"
              title=" my portfolio site"
              style={{ i_frame_style }}
              src="https://cv-tcdevengr.netlify.app/"
              // width="100"
              // height="100"
              scrolling="yes"
            >
              my portfolio site
            </iframe>
          </p> */}
      </div>
    </>
  );
};

export default Projects;
