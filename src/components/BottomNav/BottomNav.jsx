import React, { Component } from "react";
import "./BottomNav.scss";

import { ReactComponent as GithubIco } from "../../assets/Github-ico.svg";
import { ReactComponent as LinkedinIco } from "../../assets/Linkedin-ico.svg";
import { ReactComponent as WhatsappIco } from "../../assets/Whatsapp-ico.svg";

export default class BottomNav extends Component {
  render() {
    return (
      <div className="BottomNav row">
        <a className="ico github" href="https://github.com/MaicolAvila">
          <GithubIco />
        </a>
        <a
          className="ico linkedin"
          href="https://www.linkedin.com/in/maicol-andres-b5a0211ab/"
        >
          <LinkedinIco />
        </a>
        <a className="ico whatsapp" href="https://wa.link/6x7cfd">
          <WhatsappIco />
        </a>
      </div>
    );
  }
}
