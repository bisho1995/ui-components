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
import cn from './utilities/classnames';
import Card from './card';
import Styles from './styles/metric-card.module.scss';
export const MetricCard = (_a) => {
    var { body, children, className, title } = _a, attributes = __rest(_a, ["body", "children", "className", "title"]);
    return (React.createElement(Card, Object.assign({ className: cn('metric-card', Styles['metric-card'], className) }, attributes),
        title && React.createElement("h4", null, title),
        body && React.createElement("p", { className: cn('card-data', Styles['card-data']) }, body),
        children));
};
export default MetricCard;
//# sourceMappingURL=metric-card.js.map