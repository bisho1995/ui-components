/// <reference types="react" />
import React from 'react';
export interface AccordionPanelTitleTextProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
    badgeColor?: string;
    badgeContent?: string | number;
}
declare const AccordionPanelTitle: React.SFC<AccordionPanelTitleTextProps>;
export default AccordionPanelTitle;
