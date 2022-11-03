import React from "react";
import data from "../js/data.js";

import movieAppPic from "../assets/img/movie-serch-app.png";

const Projects = () => {
  const projects = data.projects_done;
  return (
    <>
      <div className="projects">
        <div>projects</div>
        {projects.map((project) => {
          return (
            <div className="project-box">
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
                <div className="project-box-title"> {project.title} </div>
              </a>

              <div className="project-box-desc">
                {project.description ? project.description : "..."}
                <ul>
                  {project.tech_used
                    ? project.tech_used.map((tech) => <li>{tech} </li>)
                    : "..."}
                </ul>
              </div>

              {/* <div className="project-box-action-box">
                <a href="/">see code</a>
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
