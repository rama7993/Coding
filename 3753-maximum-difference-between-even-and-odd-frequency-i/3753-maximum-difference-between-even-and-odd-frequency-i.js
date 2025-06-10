/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    const freq = new Array(26).fill(0);
    let maxi = 0, mini = s.length;

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 !== 0) {
            maxi = Math.max(maxi, freq[i]);
        }
        if (freq[i] % 2 === 0 && freq[i] > 0) {
            mini = Math.min(mini, freq[i]);
        }
    }

    return maxi - mini;
};