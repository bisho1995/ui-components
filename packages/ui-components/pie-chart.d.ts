/// <reference types="react" />
import React from 'react';
export interface PieChartProps {
    passed: number;
    failed: number;
    notRecieved: number;
    cutoffGood: number;
    cutoffBad: number;
    title: React.ReactNode;
    tooltip: React.ReactNode;
}
export declare class PieChart extends React.Component<PieChartProps> {
    render(): JSX.Element;
    private calculatePercentages;
    private getBadgeText;
}
export default PieChart;
