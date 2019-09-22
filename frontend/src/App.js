import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import Home from "./Home/index"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./Results/index"
import Questionnaire from "./Questionnaire";
import Quiz from "./Quiz";
import NotFound from "./NotFound/NotFound";
import { createQuestionnareResultsFromRaw } from "./questionnaireState";
import { saveResult } from "./saveResult";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionnaire: {
                results: createQuestionnareResultsFromRaw({}),
                completed: false
            }
        }
    }

    setQuestionnaireState(questionnaireState) {
        saveResult(questionnaireState.results);

        this.setState({
            ...this.state,
            questionnaire: questionnaireState
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
                        <Route path="/results" render={props => <Results {...props} results={this.state.questionnaire.results} />} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
