/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const mp = new Map();

    for (const num of arr) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    const set = new Set();

    for (const freq of mp.values()) {
        if (set.has(freq)) return false;
        set.add(freq);
    }

    return true;
};