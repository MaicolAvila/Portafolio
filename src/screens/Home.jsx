import React from "react";
import Description from "../component/Description";
import Nav from "../component/Nav";
import Skills from "../component/Skills";
import Social from "../component/Social";

import Vector from "../assets/img/Vector (1).svg";
import Projects from "../component/Projects";

function Home(props) {
  return (
    <div>
      <Nav />
      <div className="margin">
        <div className="totalWith">
          <Description />
          <Skills />
          <Projects />
          <Social />
          <div className="endVector">
            <div className="containerVector">
              <a href="#top" className="vector">
                <img src={Vector} className="imgVector" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
