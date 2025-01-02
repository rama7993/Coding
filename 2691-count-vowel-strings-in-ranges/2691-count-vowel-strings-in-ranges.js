/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */

const vowels = ['a', 'e', 'i', 'o', 'u'];
var vowelStrings = function (words, queries) {
    const mp = {}, arr = [];
    for (let i = 0; i < words.length; i++) {
        mp[i + 1] = (mp[i] || 0) + (vowelCheck(words[i]) ? 1 : 0);
    }
    for (const [x, y] of queries) {
        const sum = mp[y + 1] - (mp[x] || 0);
        arr.push(sum);
    }
    return arr;
};

var vowelCheck = function (word) {
    let n = word.length;
    return vowels.includes(word[0]) && vowels.includes(word[n - 1]);
}
