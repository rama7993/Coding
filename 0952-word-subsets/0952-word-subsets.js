/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
    const maxFreq = Array(26).fill(0), res = [];
    for (const word of words2) {
        const freq = Array(26).fill(0);
        for (let char of word) {
            const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[idx]++;
            maxFreq[idx] = Math.max(maxFreq[idx], freq[idx]);
        }
    }

    for (const word of words1) {
        const freq = Array(26).fill(0);
        isSubset = true;
        for (let char of word) {
            const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[idx]++;
        }
        for (let i = 0; i < 26; i++) {
            if (maxFreq[i] > freq[i]) {
                isSubset = false;
                break;
            }
        }
        if (isSubset) { res.push(word); }
    }
    return res;
};