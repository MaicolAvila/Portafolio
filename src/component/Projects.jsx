import React from "react";
import folder from "../assets/img/folder.webp";

function Projects(props) {
  return (
    <div className="projects" id="Respositories">
      <div className="rowLines">
        <div className="lineHorizontal"></div>
        <h1 className="center" >My Repositories</h1>
        <div className="lineHorizontal"></div>
      </div>
      <div className="projectsContainer">
        <div className="rowProjects">
          <img src={folder} alt="" />
          <h2>GestApp</h2>
        </div>
        <div className="rowProjects">
          <img src={folder} alt="" />
          <h2>TecSet</h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
