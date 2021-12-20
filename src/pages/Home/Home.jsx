import React, { Component } from "react";
import "./Home.scss";

import { ReactComponent as GithubIco } from "../../assets/Github-ico.svg";
import { ReactComponent as LinkedinIco } from "../../assets/Linkedin-ico.svg";
import { ReactComponent as WhatsappIco } from "../../assets/Whatsapp-ico.svg";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-content column">
          <div className="header row">
            <h1 className="title">
              Maicol <span className="title-span">Avila</span>
            </h1>
          </div>
          <div className="body column">
            <div className="description-content row">
              <div className="description">
                I am frontend developer specialized in react js.
              </div>
            </div>
            <div className="button-actions row">
              <a
                className="button-blue button"
                href="mailto:maicol.2001@hotmail.com"
              >
                Get In Touch
              </a>
              <a
                className="button-red button"
                href="./Hoja_de_Vida_Maicol_Andres_Avila.pdf"
                download
                target="_blank"
              >
                Download Cv
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
