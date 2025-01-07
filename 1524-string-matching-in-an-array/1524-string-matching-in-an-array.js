/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    const n = words.length;
    const ans = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (words[j].includes(words[i])) {
                ans.push(words[i]);
                break;
            }
        }
    }

    return ans;
};