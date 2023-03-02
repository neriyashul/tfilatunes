function isHyphenatedText(text, maxLength = 100) {
    if (text == undefined) return false;
    const pattern = new RegExp(`^[a-zA-Z-]{1,${maxLength}}$`);
    return (result = pattern.test(text));
}

function isInt(text, maxLength = 10) {
    if (text == undefined) return false;
    const pattern = new RegExp(`^\\d{1,${maxLength}}$`);
    return (result = pattern.test(text));
}

module.exports = {
    isHyphenatedText,
    isInt
};