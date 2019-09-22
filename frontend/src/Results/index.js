import React, { Component } from "react";
import styles from "./Results.module.css";
import feedback from './feedback';
import depressionIcon from './depression.png';
import painIcon from './pain.png';
import opioidIcon from './opioid.png';
import logo from '../logo.svg';
import ResultSummaryChart from "./resultSummaryChart";
import GoalSetting from './goalSetting';

class Results extends Component {
  getMessage(results) {
    // TODO: Add in results.risk.depression check
    return feedback[results.risk.level][results.depression.simplifiedLevel][results.pain.level];
  }

  getGeneticDisposition(result) {
    if (!result.risk.anyFamilyHistoryOfMisuse) return null;

    return (
      <p>
          You have some genetic factors that might put you at greater risk of becoming dependent 
          on opioids. People with family members with history of substance use problems can be 
          more at risk of substance use problems themselves. This does not necessarily mean 
          this will happen to you, but it might mean you have genetics that make you more 
          susceptible to it. You cannot change your genetics, however, there are many ways 
          to manage pain without relying only on opioid medications.
      </p>
    )
  }

  renderResult(icon, title, message) {
    return (
      <div className={styles.result}>
        <div className={styles.resultIcon}>
          <img src={icon} alt="Omed Assist" />
        </div>
        <div className={styles.resultMessage}>
          <h3>{title}</h3>
          {message}
        </div>
      </div>
    )
  }

  render() {
    const { results } = this.props;
    const message = this.getMessage(results);

    return (
      <div className={styles.container}>
        <img src={logo} className={styles.logo} alt="Oped Assist" />
        <div className={styles.results}>
          <h1>Your Results</h1>
          <p className={styles.summary}>{message.summary}</p>

          <div><ResultSummaryChart /></div>

          <h2>Understanding your results</h2>
          {this.renderResult(painIcon, 'Pain', message.pain)}
          {this.renderResult(opioidIcon, 'Opioid Risk', [message.opioid, this.getGeneticDisposition(results)])}
          {this.renderResult(depressionIcon, 'Depression', message.depression)}

          <div><GoalSetting /></div>
        </div>
      </div>
    );
  }
}

Results.defaultProps = {
  results: {
    risk: {
        score: 2,
        maxScore: 0,
        level: "low",
        anyFamilyHistoryOfMisuse: true,
        incomplete: true,
        depression: true|false
    },
    depression: {
        score: 0,
        maxScore: 0,
        level: "mild",
        simplifiedLevel: "mild_moderate"
    },
    pain: {
      score: 0,
      maxScore: 0,
      level: "non_significant"
    }
  }
}

export default Results;