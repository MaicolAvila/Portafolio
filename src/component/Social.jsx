import React from "react";

import githubLogo from "../assets/img/github.webp";
import linkedinLogo from "../assets/img/linkedin.webp";
import whatsappLogo from "../assets/img/whatsapp.webp";

function Social(props) {
  return (
    <div id="Socialmedia" className="socialmedia">
      <div>
        <div className="rowLines">
          <div className="lineHorizontal left"></div>
          <h1 className="center">Social Media</h1>
          <div className="lineHorizontal right"></div>
        </div>
        <div className="box">
          <div className="containerSocialmedia">
            <a href="https://github.com/MaicolAvila?tab=repositories">
              <img src={githubLogo} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/maicol-andres-b5a0211ab/">
              <img src={linkedinLogo} alt="" />
            </a>
            <a href="https://wa.link/6x7cfd">
              <img src={whatsappLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
