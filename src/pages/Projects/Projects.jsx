import React, { Component } from "react";
import cmsImage from "../../assets/CMS-image.png";
import CardProject from "../../components/CardProject/CardProject";

import "./Projects.scss"

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="Projects-container">
          <CardProject image={cmsImage} ></CardProject>
        </div>
      </div>
    );
  }
}
