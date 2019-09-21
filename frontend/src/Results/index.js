import React, { PropTypes, Component } from "react";
import styles from "./Results.module.css";


class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, level } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.results}>
          <h2>Your Results</h2>
          <p className={styles.summary}>
            Based upon your answers you may have a <strong>{level}</strong> risk of opioid substance problems.
          </p>

          <div>CHART</div>

          <h3>Understanding your results</h3>
          
          <h3>Recommended Actions</h3>

        </div>
      </div>
    );
  }
}

export default Results;
