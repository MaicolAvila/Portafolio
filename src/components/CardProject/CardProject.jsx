import React, { Component } from "react";
import "./CardProject.scss";

export default class CardProject extends Component {
  render() {
    return (
      <div className="CardProject row">
        <div className="image-container">
          <img src={this.props.image} alt="" />
        </div>
        <div className="description-content">
          <div className="title">MOTION CMS</div>
          <div className="description">
            CMS desarrollado en reactJs, con un manejo de datos desde el erp
            odoo y backend en python.
          </div>
          <div className="buttons row">
            <a href="">Ver</a>
            <a href="">Saber más...</a>
          </div>
        </div>
      </div>
    );
  }
}
