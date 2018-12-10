const copyToClipboardFallback = (value, onCopyImageUrlSuccess, onCopyImageUrlFailure) => {
    const textArea = document.createElement('textarea');
    let success = false;
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        success = document.execCommand('copy');
    }
    catch (err) { } // success is set to false
    document.body.removeChild(textArea);
    if (success) {
        onCopyImageUrlSuccess();
    }
    else {
        onCopyImageUrlFailure();
    }
};
export default { copyToClipboardFallback };
//# sourceMappingURL=copy-to-clipboard.js.map