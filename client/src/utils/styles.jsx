const styles = {
    breakLine: {
        visibility: "hidden",
        margin: "3px",
    },
};

export function parseText(text) {
    if (Array.isArray(text)) {
        return text.map((str, i) => {
            return [str, <hr key={i} style={styles.breakLine} />];
        });
    } else {
        return text;
    }
}
