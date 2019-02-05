import { Component } from 'react';
import './themes/sendgrid-snippet';
export interface CodeSnippetProps {
    height?: string;
    text: string;
    width?: string;
}
declare class CodeSnippet extends Component<CodeSnippetProps> {
    readonly state: {
        hasCopied: boolean;
    };
    private aceEditorRef;
    render(): JSX.Element;
    private handleCopy;
    private hasCopied;
    private resetCopied;
}
export default CodeSnippet;
export { CodeSnippet };
