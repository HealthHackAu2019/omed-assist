import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home"
import Survey from "./Survey"
import Results from "./Results"

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/survey" component={Survey} />
              <Route path="/results" component={Results} />
          </Router>
      </div>
    );
  }
}

export default App;
