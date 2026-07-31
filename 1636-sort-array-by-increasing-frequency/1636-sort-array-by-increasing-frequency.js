/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const mp = new Map();

    for (let num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    return nums.sort((a, b) => {
        let fa = mp.get(a), fb = mp.get(b);
        if (fa === fb) return b - a;
        return fa - fb;
    })
};