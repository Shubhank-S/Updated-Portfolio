import React from "react";
import "./Home.css";
import Resume from "../../assets/Resume.pdf";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>
          <Typewriter
            options={{
              strings: ["Hi, My Name is Shubhank 👋"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="prompt">
          <p>A Frontend developer</p>
          <a href={Resume} download="Shubhank's Resume" className="resume">
            Download CV
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <span>HTML, CSS, Javascipt , ReactJS </span>
            <h2>Technologies</h2>
            <p></p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
