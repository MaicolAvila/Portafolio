import React, { Component } from "react";
import "./CardProject.scss";

export default class CardProject extends Component {
  render() {
    return (
      <div className="CardProject row">
        <div className="image-container">
          <img src={this.props.image} alt="" />
        </div>
        <div className="description-content column">
          <div className="title">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
          <div className="buttons row">
            <a className="view" href={this.props.link_vew}>
              Ver
            </a>
            <a className="know" href={this.props.link_know}>
              Saber más...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
