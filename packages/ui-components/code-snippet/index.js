import React, { Component, createRef } from 'react';
import AceEditor from 'react-ace';
import Icon from '../icon';
import Tooltip from '../tooltip';
import CopyUtil from '../utilities/copy-to-clipboard';
import Styles from './code-snippet.module.scss';
import './themes/sendgrid-snippet';
class CodeSnippet extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasCopied: false,
        };
        this.aceEditorRef = createRef(); // Ace types not supported
        this.handleCopy = () => {
            this.aceEditorRef.current.editor.selectAll(); // Highlight code to provide user feedback
            CopyUtil.copyToClipboardFallback(this.aceEditorRef.current.editor.getValue(), this.hasCopied, () => { });
        };
        this.hasCopied = () => {
            this.setState({ hasCopied: true }, this.resetCopied);
        };
        this.resetCopied = () => {
            setTimeout(() => this.setState({ hasCopied: false }), 500);
        };
    }
    render() {
        const { width = '100%', height = '46px', text } = this.props;
        return (React.createElement("div", { className: Styles['snippet-container'], style: { width, height } },
            React.createElement(AceEditor, { name: "sendgrid-snippet", mode: "html", theme: "sendgrid-snippet", width: width, height: height, value: text, showGutter: false, highlightActiveLine: false, readOnly: true, ref: this.aceEditorRef }),
            React.createElement(Tooltip, { content: this.state.hasCopied ? 'Copied to Clipboard' : 'Click to Copy', className: Styles['copy-button-tooltip'] },
                React.createElement("div", { className: Styles['copy-button-container'], onClick: this.handleCopy },
                    React.createElement(Icon, { type: this.state.hasCopied ? 'check-circle' : 'copy', className: Styles['copy-button'] })))));
    }
}
export default CodeSnippet;
export { CodeSnippet };
