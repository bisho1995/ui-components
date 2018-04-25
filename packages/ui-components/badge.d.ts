/// <reference types="react" />
import React from 'react';
export interface BadgeProps {
    children?: string | number;
    color?: string;
    content?: string | number;
}
export declare const Badge: React.SFC<BadgeProps>;
export default Badge;