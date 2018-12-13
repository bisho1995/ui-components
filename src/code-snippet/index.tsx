import React, { Component, createRef } from 'react';
import AceEditor from 'react-ace';
import Icon from '../icon';
import Tooltip from '../tooltip';
import CopyUtil from '../utilities/copy-to-clipboard';
import Styles from './code-snippet.module.scss';
import './themes/sendgrid-snippet';

export interface CodeSnippetProps {
  height?: string;
  text: string;
  width?: string;
}

class CodeSnippet extends Component<CodeSnippetProps> {
  public readonly state = {
    hasCopied: false,
  };

  private aceEditorRef = createRef<any>(); // Ace types not supported

  public render() {
    const { width = '100%', height = '46px', text } = this.props;
    return (
      <div className={Styles['snippet-container']} style={{ width, height }}>
        <AceEditor
          name="sendgrid-snippet"
          mode="html"
          theme="sendgrid-snippet"
          width={width}
          height={height}
          value={text}
          showGutter={false}
          highlightActiveLine={false}
          readOnly
          ref={this.aceEditorRef}
        />

        <Tooltip
          content={
            this.state.hasCopied ? 'Copied to Clipboard' : 'Click to Copy'
          }
          className={Styles['copy-button-tooltip']}
        >
          <div
            className={Styles['copy-button-container']}
            onClick={this.handleCopy}
          >
            <Icon
              type={this.state.hasCopied ? 'check-circle' : 'copy'}
              className={Styles['copy-button']}
            />
          </div>
        </Tooltip>
      </div>
    );
  }

  private handleCopy = () => {
    this.aceEditorRef.current.editor.selectAll(); // Highlight code to provide user feedback
    CopyUtil.copyToClipboardFallback(
      this.aceEditorRef.current.editor.getValue(),
      this.hasCopied,
      () => {}
    );
  };

  private hasCopied = () => {
    this.setState({ hasCopied: true }, this.resetCopied);
  };

  private resetCopied = () => {
    setTimeout(() => this.setState({ hasCopied: false }), 500);
  };
}

export default CodeSnippet;
export { CodeSnippet };
