/** @format */

import React, { Component } from "react";
import "./css/style.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurStaff from "./pages/OurStaff";
import Contact from "./pages/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/ourstaff" component={OurStaff} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
