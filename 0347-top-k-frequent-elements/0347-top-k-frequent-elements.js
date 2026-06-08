/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const mp = new Map();

    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1)
    }

    return Array.from(mp.keys()).sort((a, b) => mp.get(b) - mp.get(a)).slice(0, k);
};