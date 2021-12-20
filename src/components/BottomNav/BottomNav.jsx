import React, { Component } from "react";

export default class BottomNav extends Component {
  render() {
    return (
      <div className="icons-contet row">
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
