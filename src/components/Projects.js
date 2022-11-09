import React from "react";
import {
  FaCheckCircle,
} from "react-icons/fa";
// import $ from "jquery";
import movieAppPic from "../assets/img/banner-bg.png";


const Projects = (props) => {
  const projects = props.projects;

  

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
                  {project.description
                    ? project.description
                    : "No description available"}
                  <ul>
                    {project.tech_used
                      ? project.tech_used.map((tech, index) => (
                          <li key={index}>{tech} </li>
                        ))
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
                      {/* <FaUpload /> */}
                      In Progress
                    </span>
                  ) : (
                    ""
                  )}
                  
                </div>
              </div>
            );
          })}
        </div>

     
      </div>
    </>
  );
};

export default Projects;
