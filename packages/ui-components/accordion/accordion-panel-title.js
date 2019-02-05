var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Badge from '../badge';
import cn from '../utilities/classnames';
import Styles from './accordion.module.scss';
const AccordionPanelTitle = (_a) => {
    var { text, style, className, badgeColor, badgeContent } = _a, attributes = __rest(_a, ["text", "style", "className", "badgeColor", "badgeContent"]);
    return (React.createElement("h2", Object.assign({ className: cn(className, {
            'has-badge': !!badgeContent,
            [Styles['has-badge']]: !!badgeContent,
        }), style: style }, attributes),
        text,
        badgeContent && React.createElement(Badge, { color: badgeColor }, badgeContent)));
};
export default AccordionPanelTitle;
