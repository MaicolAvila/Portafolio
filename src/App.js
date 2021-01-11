import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/Home";

function App(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
