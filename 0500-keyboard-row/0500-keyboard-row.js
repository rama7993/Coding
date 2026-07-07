/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const map = {}; // ch -> row;

    for (const ch of "qwertyuiop") map[ch] = 1;
    for (const ch of "asdfghjkl") map[ch] = 2;
    for (const ch of "zxcvbnm") map[ch] = 3;

    const ans = [];

    for (const word of words) {
        const lower = word.toLowerCase();
        const row = map[lower[0]];

        let ok = true;
        for (const ch of lower) {
            if (map[ch] !== row) {
                ok = false;
                break;
            }
        }

        if (ok) ans.push(word);
    }

    return ans;
};