import React from "react";

import jsLogo from "../assets/img/jsLogo.svg";
import nodeJs from "../assets/img/nodejsLogo.svg";
import reduxLogo from "../assets/img/reduxLogo.svg";
import gitLogo from "../assets/img/gitLogo.svg";
import reactLogo from "../assets/img/reactLogo.svg";
import mysqlLogo from "../assets/img/mysqlLogo.svg";
import mongodbLogo from "../assets/img/mongodbLogo.svg";

function Skills(props) {
  return (
    <div className="skills" id="Myskills">
      <div className="rowLines">
        <div className="lineHorizontal left"></div>
        <h1 className="center">My Skills</h1>
        <div className="lineHorizontal right"></div>
      </div>
      <div className="box">
        <div className="containerSkills">
          <img src={jsLogo} alt="" />
          <img src={nodeJs} alt="" />
          <img src={reduxLogo} alt="" />
          <img src={gitLogo} alt="" />
          <img src={mysqlLogo} alt="" />
          <img src={mongodbLogo} alt="" />
          <img src={reactLogo} alt="" className="reactLogo" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
