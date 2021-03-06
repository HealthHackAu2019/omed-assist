import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import Home from "./Home/index"
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./Results/index"
import Questionnaire from "./Questionnaire";
import Quiz from "./Quiz";
import NotFound from "./NotFound/NotFound";
import { createQuestionnareResultsFromRaw, calculateResults, defaultRawQuestionnaireResults } from "./questionnaireState";
import { saveResult } from "./saveResult";

class App extends Component {

    constructor(props) {
        super(props);
        const questionnaireResults = {
            results: createQuestionnareResultsFromRaw(defaultRawQuestionnaireResults()),
            completed: false
        };
        this.state = {
            questionnaire: questionnaireResults,
            results: calculateResults(questionnaireResults)
        }
    }

    setQuestionnaireState(questionnaireState) {
        saveResult(questionnaireState.results);

        this.setState({
            ...this.state,
            questionnaire: questionnaireState,
            results: calculateResults(questionnaireState)
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/questionnaire" render={props => <Questionnaire {...props} setQuestionnaireState={this.setQuestionnaireState.bind(this)} />} />
                        <Route path="/quiz" render={props => <Quiz {...props} />} />
                        <Route path="/results" render={props => <Results {...props} results={this.state.results} />} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
