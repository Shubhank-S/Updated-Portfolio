import React from "react";
import { useParams } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();

  return <div className="project"></div>;
}

export default ProjectDisplay;
