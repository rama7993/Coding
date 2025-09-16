/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const set = new Set(brokenLetters);
    let cnt = 0;

    let wordBlocked = false;
    for (const ch of text + ' ') {
        if (set.has(ch)) {
            wordBlocked = true;
        }
        else if (ch === ' ') {
            if (!wordBlocked) cnt++;
            wordBlocked = false;
        }
    }
    return cnt;
};