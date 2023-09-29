export const shortenText = (text, n) => {
    if (text.length > n) {
        const shortedText = text.substring(0, n).concat('...');
        return shortedText
    }

    return text;
};
