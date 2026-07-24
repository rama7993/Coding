/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const mp = new Map();

    for (const num of arr) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    return [...mp.values()].length === new Set(mp.values()).size;
};