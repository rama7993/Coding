/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    const mp = new Map();

    for (let word of words) {
        mp.set(word, (mp.get(word) || 0) + 1);
    }

    let cnt = 0, middle = false;

    for (let [word, freq] of mp) {
        let rev = word.split('').reverse().join('');

        if (word === rev) {
            const pairs = Math.floor(freq / 2);
            cnt += pairs * 4;
            if (freq % 2 === 1) middle = true;
        } else if (mp.has(rev)) {
            const pairs = Math.min(freq, mp.get(rev));
            cnt += pairs * 4;
            mp.set(word, 0);
            mp.set(rev, 0);
        }
    }

    if (middle) cnt += 2;

    return cnt;
};