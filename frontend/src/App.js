import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import Home from "./Home/index"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./Results/index"
import Questionnaire from "./Questionnaire";
import NotFound from "./NotFound/NotFound";
import { getDefaultState, updateQuestionnaireState } from "./appState";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = getDefaultState()
    }

    setQuestionnaireState(questionnaireState) {
        this.setState(updateQuestionnaireState(questionnaireState));
    }

    render() {
        return (
            <div className={styles.container}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/questionnaire" render={props => <Questionnaire {...props} setQuestionnaireState={this.setQuestionnaireState.bind(this)} />} />
                        <Route path="/results" render={props => <Results {...props} results={this.state.results} />} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
