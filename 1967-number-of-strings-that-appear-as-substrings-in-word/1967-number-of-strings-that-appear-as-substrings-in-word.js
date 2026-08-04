/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let cnt = 0;

    for (let pattern of patterns) {
        if (word.includes(pattern)) cnt++;
    }

    return cnt;
};