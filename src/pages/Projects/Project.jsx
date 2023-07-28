import React from "react";
// import ProjectItem from "../components/ProjectItem";
// import Todos from "../assets/Todos.png";
import "./Project.css";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";

function Project() {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} />;
        })}
      </div>
    </div>
  );
}

export default Project;
