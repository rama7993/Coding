/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const mp = new Map();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const key = target - nums[i];
        if (mp.has(key)) {
            return [mp.get(key), i];
        } else {
            mp.set(nums[i], i);
        }
    }

    return [];

};