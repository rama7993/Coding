/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n;
    const endOfArr = nums.splice(n - k);
    nums.unshift(...endOfArr);
};