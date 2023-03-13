import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
          <Route exact path="/"><News key="general" pageSize={5} country="in" category="general" /></Route>
          <Route exact path="/Sports"><News key="sports" pageSize={5} country="in" category="sports" /></Route>
          <Route exact path="/Business"><News key="business" pageSize={5} country="in" category="business" /></Route>
          <Route exact path="/Entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment" /></Route>
          <Route exact path="/Health"><News key="health" pageSize={5} country="in" category="health" /></Route>
          <Route exact path="/Science"><News key="science" pageSize={5} country="in" category="science" /></Route>
          <Route exact path="/Technology"><News key="technology" pageSize={5} country="in" category="technology" /></Route>
          <Route exact path="/General"><News key="general" pageSize={5} country="in" category="general" /></Route>
          </Switch>
      </Router>
      </div>
    );
  }
}
