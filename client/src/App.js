import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactState from "./context/profile/ProfileState";
import "./style.css";

function App() {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
