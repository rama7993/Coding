/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const mp = new Map();

    for (let char of s) {
        mp.set(char, (mp.get(char) || 0) + 1);
    }


    return [...mp.entries()].sort((a, b) => b[1] - a[1]).map(([char, cnt]) => char.repeat(cnt)).join('');
};