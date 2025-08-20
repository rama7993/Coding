/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    const n = words.length;
    const mp = new Map();

    for (let k = 0; k < n; k++) {
        const word = words[k];
        const m = word.length;
        const arr = new Array(m - 1);
        for (let i = 1; i < m; i++) {
            arr[i - 1] = word.charCodeAt(i) - word.charCodeAt(i - 1);
        }
        const key = JSON.stringify(arr);
        if (mp.has(key)) {
            mp.set(key, [...mp.get(key), word]);
        } else {
            mp.set(key, [word]);
        }
    }

    for (const [key, words] of mp.entries()) {
        if (words.length === 1) return words[0];
    }
};