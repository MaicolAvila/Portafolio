import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BackgroundPage from "./components/BackgroundPage/BackgroundPage";
import Navigation from "./components/Navigation/Navigation";
import Contact from "./pages/Contact/Contact";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Repositories from "./pages/Repositories/Repositories";

function App() {
  return (
    <div className="App">
      <Router>
        <BackgroundPage>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Biography" component={Repositories} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </BackgroundPage>
      </Router>
    </div>
  );
}

export default App;
