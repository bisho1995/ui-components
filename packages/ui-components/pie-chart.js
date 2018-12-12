import React from 'react';
import Card from './card';
import Styles from './styles/pie-chart.module.scss';
import cn from './utilities/classnames';
export class PieChart extends React.Component {
    constructor() {
        super(...arguments);
        this.calculatePercentages = (passed, failed, notRecieved) => {
            const total = passed + failed + notRecieved;
            return {
                failed: Math.round((failed / total) * 100),
                notRecieved: Math.round((notRecieved / total) * 100),
                passed: Math.round((passed / total) * 100),
            };
        };
        this.getBadgeText = (percentages) => {
            if (percentages.passed >= this.props.cutoffGood) {
                return {
                    color: 'mantis',
                    content: 'Good',
                };
            }
            else if (percentages.passed >= this.props.cutoffBad) {
                return {
                    color: 'carrot',
                    content: 'Average',
                };
            }
            else {
                return {
                    color: 'ron-burgundy',
                    content: 'Poor',
                };
            }
        };
    }
    render() {
        const { passed, failed, notRecieved, title, tooltip } = this.props;
        const percentages = this.calculatePercentages(passed, failed, notRecieved);
        const badge = this.getBadgeText(percentages);
        return (React.createElement(Card, { centered: true, className: "pie-chart-card", badge: badge },
            React.createElement("div", { className: Styles['pie-chart'] },
                React.createElement("div", { className: Styles['pie-chart-svg'] },
                    React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 42 42", className: "donut" },
                        React.createElement("circle", { className: "donut-hole", cx: "21", cy: "21", r: "15.91549430918954", fill: "#fff" }),
                        React.createElement("circle", { className: "donut-ring", cx: "21", cy: "21", r: "15.91549430918954", fill: "transparent", stroke: "#9e9e9e", "stroke-width": "2" }),
                        React.createElement("circle", { className: "donut-segment", cx: "21", cy: "21", r: "15.91549430918954", fill: "transparent", stroke: "#9e9e9e", "stroke-width": "2", "stroke-dasharray": `${percentages.notRecieved} ${100 -
                                percentages.notRecieved}`, "stroke-dashoffset": `${125 -
                                percentages.passed -
                                percentages.failed}` }),
                        React.createElement("circle", { className: "donut-segment", cx: "21", cy: "21", r: "15.91549430918954", fill: "transparent", stroke: "#b71c1c", "stroke-width": "2", "stroke-dasharray": `${percentages.failed} ${100 -
                                percentages.failed}`, "stroke-dashoffset": `${125 - percentages.passed}` }),
                        React.createElement("circle", { className: "donut-segment", cx: "21", cy: "21", r: "15.91549430918954", fill: "transparent", stroke: "#18c96e", "stroke-width": "2", "stroke-dasharray": `${percentages.passed} ${100 -
                                percentages.passed}`, "stroke-dashoffset": "25" })),
                    React.createElement("span", { className: cn(Styles['pie-chart-number'], 'is-size-h2') },
                        percentages.passed,
                        "%")),
                React.createElement("ul", { className: Styles['pie-chart-legend'] },
                    React.createElement("li", null,
                        React.createElement("span", { className: "label label-delivered" }, `${percentages.passed}% passed`)),
                    React.createElement("li", null,
                        React.createElement("span", { className: "label label-error" }, `${percentages.failed}% failed`)),
                    React.createElement("li", null,
                        React.createElement("span", { className: "label label-draft" }, `${percentages.notRecieved}% not received`)))),
            React.createElement("span", { className: "has-underline is-size-h2", "data-tooltip": tooltip, "data-tooltip-pos": "down" }, title)));
    }
}
export default PieChart;
//# sourceMappingURL=pie-chart.js.map