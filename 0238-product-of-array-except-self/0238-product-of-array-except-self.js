/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const res = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        res[i] = nums[i - 1] * res[i - 1];
    }
    console.log(res);
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }

    return res;
};