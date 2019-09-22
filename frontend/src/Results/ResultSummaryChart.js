import React, { Component } from "react";
import _ from "lodash";
import styles from "./ResultSummaryChart.module.css";

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

        const risk = this.props.results.risk;
        const depression = this.props.results.depression;
        const pain = this.props.results.pain;

        const features = [
            { title: "Pain", value: pain.score, maxValue: pain.maxScore, color: "#7BDFC2", textXOffset: 0, textYOffset: 0 },
            { title: "Depression", value: depression.score, maxValue: depression.maxScore, color: "#8330F3", textXOffset: 0, textYOffset: 0 },
            { title: "Opioid Use Risk", value: risk.score, maxValue: risk.maxScore, color: "#EAA745", textXOffset: 0, textYOffset: 0 },
        ];

        const primaryColor = "#9013FE";
        const dimensions = features.length;
        const lineLength = 45;
        const majorTickRadius = 35;
        const radToDimension = 2 * Math.PI / dimensions;
        const featureCircleRadius = 3;
        const minorTicks = 2;

        const featurePositions = features.map((feature, i) => {
            const angle = i * radToDimension - Math.PI / 2;
            const normalizedValue = feature.value / feature.maxValue;
            const radius = normalizedValue * majorTickRadius;
            const width = radius * Math.cos(angle);
            const height = radius * Math.sin(angle);
            const x = 50 + width;
            const y = 50 + height;
            return { ...feature, angle, id: i, normalizedValue, radius, width, height, x, y };
        });

        const lines = featurePositions.map(feature => {
            const width = lineLength * Math.cos(feature.angle);
            const height = lineLength * Math.sin(feature.angle);
            const x = 50 + width;
            const y = 50 + height;
            return <line x1="50" y1="50" x2={x} y2={y} stroke="rgba(0,0,0,0.1)" strokeWidth="0.25" key={`line-${feature.id}`} />;
        });

        const polygonPoints = featurePositions
            .map(feature => `${feature.x},${feature.y}`)
            .join(" ");

        const featureCircles = featurePositions.map(feature => {
            return <circle cx={feature.x} cy={feature.y} r={featureCircleRadius} fill={primaryColor} key={`feature-circle-${feature.id}`} />;
        });

        const featureText = _(featurePositions)
            .map(feature => {
                const radius = feature.radius + 15 + 5 / (feature.radius + 1);
                const width = radius * Math.cos(feature.angle);
                const height = radius * Math.sin(feature.angle);
                const x = 50 + width;
                const y = 50 + height
                const xOffset = feature.textXOffset;
                const yOffset = feature.textYOffset;
                return [
                    <svg x={x} y={y} key={`text-${feature.id}`} className={styles.text}>
                        <g>
                            <text x={xOffset} y={yOffset + 5} textAnchor="middle">
                                <tspan className={styles.value}>{feature.value}</tspan>
                                <tspan className={styles.maxValue}>/{feature.maxValue}</tspan>
                            </text>
                            <text x={xOffset} y={yOffset + 11} className={styles.title} textAnchor="middle">{feature.title}</text>
                        </g>
                    </svg>
                ];
            })
            .flatten()
            .value();

        const tickCircles = _.range(1, minorTicks + 1)
            .map(i => {
                const radius = (majorTickRadius / (minorTicks + 1)) * i;
                return <circle cx="50" cy="50" r={radius} stroke="rgba(0,0,0,0.1)" strokeWidth="0.25" fill="none" key={`tick-${i}`} />;
            });

        return (
            <div className={styles.container}>
                <svg viewBox={`0 0 100 100`} className={styles.chart}>
                    <circle cx="50" cy="50" r={majorTickRadius} stroke="rgba(0,0,0,0.1)" strokeWidth="0.25" fill="none" />
                    {tickCircles}
                    {lines}
                    <polygon points={polygonPoints} fill={primaryColor + "1A"} stroke={primaryColor} strokeWidth="0.5" />
                    {featureCircles}
                    {featureText}
                </svg>
            </div>
        );
    }
}

export default ResultSummaryChart;
