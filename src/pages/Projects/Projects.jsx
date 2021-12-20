import React, { Component } from "react";
import cmsImage from "../../assets/CMS-image.png";
import CardProject from "../../components/CardProject/CardProject";

import "./Projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="Projects-container">
          <CardProject
            image={cmsImage}
            link_vew=""
            link_know=""
            title="MOTION CMS"
            description="CMS desarrollado en reactJs, con un manejo de datos desde el erp
            odoo y backend en python."
          ></CardProject>
        </div>
      </div>
    );
  }
}
