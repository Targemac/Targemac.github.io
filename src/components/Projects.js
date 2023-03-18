import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
// import axios from "axios";
import movieAppPic from "../assets/img/banner-bg.png";
import data from "../js/data";
const { projects_done } = data;

const Projects = ({ baseURL }) => {
  // const [projects, setProjects] = useState([]);
  // const url = "http://localhost:5000/";

  // useEffect(() => {
  //   const getProjects = async () => {
  //     try {
  //       const response = await axios.get(`${baseURL}projects`);
  //       // console.table(response);
  //       setProjects(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   // getProjects();
  //   return () => {
  //     getProjects();
  //   };
  // }, [baseURL]);

  return (
    <>
      <div className="projects">
        <div className="projects-head">projects</div>
        <div className="project-grp">
          {projects_done.map((project, index) => {
            return (
              <div key={index} className="project-box">
                {project.img ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="project-box-img">
                      <img src={project.project_image} alt="" />
                    </div>
                  </a>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  ...
                  <br /><br/>
                 
                    {project.tech_used
                      ? project.tech_used.map((tech, index) => (
                          <span key={index}>- {tech} </span>
                        ))
                      : "..."}
                  
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
