import React, { Component } from "react";

// {
//   "risk": {
//       "score": 4,
//       "maxScore": 11,
//       "level": "high",
//       "anyFamilyHistoryOfMisuse": true,
//       "depression": true,
//       "incomplete": true
//   },
//   "depression": {
//       "score": 6,
//       "maxScore": 42,
//       "level": "normal",
//       "simplifiedLevel": "normal",
//       "anyFamilyHistoryOfMisuse": true,
//       "incomplete": true
//   },
//   "pain": {
//       "score": 4,
//       "maxScore": 10,
//       "level": "non_significant",
//       "incomplete": true
//   }
// }


class ResultSummaryChart extends Component {

  render() {

    return (
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"/>
      </svg>
    );
  }
}

export default ResultSummaryChart;
