/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const mp = new Map();
    for (let letter of s) {
        mp.set(letter, (mp.get(letter) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (mp.get(s[i]) === 1) return i;
    }

    return -1;
};