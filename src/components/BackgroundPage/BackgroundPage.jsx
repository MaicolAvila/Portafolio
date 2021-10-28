import React, { Component } from "react";
import './BackgroundPage.scss'

class BackgroundPage extends Component {
  render() {
    return <div className="BackgroundPage">
        {this.props.children}
    </div>;
  }
}

export default BackgroundPage;
