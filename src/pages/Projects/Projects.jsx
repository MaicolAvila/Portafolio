import React, { Component } from "react";
import cmsImage from "../../assets/CMS-image.png";
import CardProject from "../../components/CardProject/CardProject";

import "./Projects.scss";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "MOTION CMS",
          description: `CMS desarrollado en reactJs, con un manejo de datos desde el erp
          odoo y backend en python.`,
          image: cmsImage,
          link_vew: "",
          link_know: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="Projects">
        <div className="Projects-container">
          {this.state.projects.map((project) => {
            return (
              <CardProject
                title={project.title}
                description={project.description}
                image={project.image}
                link_vew={project.link_vew}
                link_know={project.link_know}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
