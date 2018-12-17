import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import Styles from './styles/pie-chart.module.scss';
import { color as ValidColor } from './types/color';
import cn from './utilities/classnames';

export interface PieChartProps {
  passed: number;
  failed: number;
  notRecieved: number;
  cutoffGood: number;
  cutoffBad: number;
  title: React.ReactNode;
  tooltip: React.ReactNode;
}
export class PieChart extends React.Component<PieChartProps> {
  public render() {
    const { passed, failed, notRecieved, title, tooltip } = this.props;
    const percentages = this.calculatePercentages(passed, failed, notRecieved);
    const badge = this.getBadgeText(percentages);
    return (
      <Card centered className="pie-chart-card" badge={badge}>
        <div className={Styles['pie-chart']}>
          <div className={Styles['pie-chart-svg']}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 42 42"
              className="donut"
            >
              <circle
                className="donut-hole"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="#fff"
              />
              <circle
                className="donut-ring"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#9e9e9e"
                strokeWidth="2"
              />
              <circle
                className="donut-segment"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#9e9e9e"
                strokeWidth="2"
                strokeDasharray={`${percentages.notRecieved} ${100 -
                  percentages.notRecieved}`}
                strokeDashoffset={`${125 -
                  percentages.passed -
                  percentages.failed}`}
              />
              <circle
                className="donut-segment"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#b71c1c"
                strokeWidth="2"
                strokeDasharray={`${percentages.failed} ${100 -
                  percentages.failed}`}
                strokeDashoffset={`${125 - percentages.passed}`}
              />
              <circle
                className="donut-segment"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#18c96e"
                strokeWidth="2"
                strokeDasharray={`${percentages.passed} ${100 -
                  percentages.passed}`}
                strokeDashoffset="25"
              />
            </svg>
            <span className={cn(Styles['pie-chart-number'], 'is-size-h2')}>
              {!isNaN(percentages.passed) && `${percentages.passed}%`}
            </span>
          </div>
          <ul className={Styles['pie-chart-legend']}>
            <li>
              <span className="label label-delivered">{`${percentages.passed ||
                0}% passed`}</span>
            </li>
            <li>
              <span className="label label-error">{`${percentages.failed ||
                0}% failed`}</span>
            </li>
            <li>
              <span className="label label-draft">{`${percentages.notRecieved ||
                0}% not received`}</span>
            </li>
          </ul>
        </div>
        <span
          className="has-underline is-size-h2"
          data-tooltip={tooltip}
          data-tooltip-pos="down"
        >
          {title}
        </span>
      </Card>
    );
  }
  private calculatePercentages = (
    passed: number,
    failed: number,
    notRecieved: number
  ) => {
    const total = passed + failed + notRecieved;
    return {
      failed: Math.round((failed / total) * 100),
      notRecieved: Math.round((notRecieved / total) * 100),
      passed: Math.round((passed / total) * 100),
    };
  };

  private getBadgeText = (percentages: { [key: string]: number }) => {
    if (percentages.passed >= this.props.cutoffGood) {
      return {
        color: 'mantis' as ValidColor,
        content: 'Good',
      };
    } else if (percentages.passed >= this.props.cutoffBad) {
      return {
        color: 'carrot' as ValidColor,
        content: 'Average',
      };
    } else {
      return {
        color: 'ron-burgundy' as ValidColor,
        content: 'Poor',
      };
    }
  };
}

export default PieChart;
