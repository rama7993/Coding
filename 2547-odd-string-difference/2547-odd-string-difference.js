/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    const diff = (w) => {
        const d = [];
        for (let i = 1; i < w.length; i++) {
            d.push(w.charCodeAt(i) - w.charCodeAt(i - 1));
        }
        return d.join("#");
    };

    const d0 = diff(words[0]);
    const d1 = diff(words[1]);
    const d2 = diff(words[2]);

    const majority = (d0 === d1 || d0 === d2) ? d0 : d1 || d2;

    for (const w of words) {
        if (diff(w) !== majority) return w;
    }
};