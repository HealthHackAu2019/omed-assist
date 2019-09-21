import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home"
import { saveResult } from "./saveResult.js"
import Results from "./Results"
import Questionnaire from "./Questionnaire";

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/questionnaire" component={Questionnaire} />
              <Route path="/results" component={Results} />
          </Router>
      </div>
    );
  }
}

// saveResult();

export default App;
