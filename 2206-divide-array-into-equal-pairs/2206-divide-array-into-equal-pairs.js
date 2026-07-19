/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const mp = new Map();

    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    return Array.from(mp.values()).every(val => val % 2 == 0);
};