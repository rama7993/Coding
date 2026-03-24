/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const mp = new Map();

    for (let strg of words) {
        mp.set(strg, (mp.get(strg) || 0) + 1);
    }

    const sorted = [...mp.keys()].sort((a, b) => {
        if (mp.get(b) === mp.get(a)) {
            return a.localeCompare(b);
        }
        return mp.get(b) - mp.get(a)
    });

    return sorted.slice(0, k);

};