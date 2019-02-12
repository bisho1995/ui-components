var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import cn from 'classnames';
import numeral from 'numeral';
import React from 'react';
import Icon from './icon';
import Styles from './styles/contact-count.module.scss';
import Tooltip from './tooltip';
export const ContactCount = (_a) => {
    var { count, isRight, className } = _a, attributes = __rest(_a, ["count", "isRight", "className"]);
    return (React.createElement("div", Object.assign({ className: cn('contact-count', Styles['contact-count'], className, {
            'is-right': isRight,
            [Styles['is-right']]: isRight,
        }) }, attributes),
        React.createElement(Tooltip, { content: "Contact Count", direction: "up" },
            React.createElement("abbr", null, numeral(count).format('0,0'))),
        ' ',
        React.createElement(Icon, { type: "people", size: 20 })));
};
ContactCount.defaultProps = {
    count: '0',
};
export default ContactCount;
