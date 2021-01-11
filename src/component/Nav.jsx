import React from "react";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "../assets/styles/Menu.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="Nav">
      <div className="row">
        <a href="#">M</a>
      </div>
      <div className="row">
        <Menu
          className="menu"
          menuButton={
            <MenuButton className="menuButton">
              <div className="column">
                {" "}
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </MenuButton>
          }
        >
          <MenuItem>
            <a href="#Myskills">Skills</a>
          </MenuItem>
          <MenuItem>
            <a href="#Respositories">Repositories</a>
          </MenuItem>
          <MenuItem>
            {" "}
            <a href="#Socialmedia">Social Media</a>{" "}
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Nav;
