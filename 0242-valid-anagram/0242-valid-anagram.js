/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const freq = new Map();
    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
        freq.set(t[i], (freq.get(t[i]) || 0) - 1);
    }
    return [...freq.values()].every((count) => count === 0);
};