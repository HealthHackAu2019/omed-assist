import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import Home from "./Home/index"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./Results"
import Questionnaire from "./Questionnaire";
import NotFound from "./NotFound/NotFound";
// import { saveResult } from "./saveResult.js"

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questionnaire" component={Questionnaire} />
                <Route path="/results" component={Results} />
                <Route component={NotFound} />
              </Switch>
          </Router>
      </div>
    );
  }
}

// saveResult();

export default App;
