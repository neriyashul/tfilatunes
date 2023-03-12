export function parseText(text) {
    if (Array.isArray(text)) {
        return text.map((str, i) => [str, <br key={i} />]);
    } else {
        return text;
    }
}
