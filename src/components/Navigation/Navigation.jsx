import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="Navigation row">
        <Link to="/" className={`item ${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link
          to="/Projects"
          className={`item ${pathname === "/Projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/Biography"
          className={`item ${pathname === "/Biography" ? "active" : ""}`}
        >
          Biography
        </Link>
        <Link
          to="/Contact"
          className={`item ${pathname === "/Contact" ? "active" : ""}`}
        >
          Contact
        </Link>
      </div>
    );
  }
}

export default withRouter(Navigation);
