/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = new Map();

    for (const ch of s) {
        if (vowels.has(ch.toLowerCase())) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }
    }

    let res = '', idx = 0;
    const sortedVowels = Array.from(freq.keys()).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    const n = sortedVowels.length;

    for (const ch of s) {
        if (vowels.has(ch.toLowerCase())) {
            while (idx < n && freq.get(sortedVowels[idx]) === 0) {
                idx++;
            }
            res += sortedVowels[idx];
            freq.set(sortedVowels[idx], freq.get(sortedVowels[idx]) - 1);
        } else {
            res += ch;
        }
    }

    return res;
};