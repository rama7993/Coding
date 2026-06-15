/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const prefix = Array(n);
    const suffix = Array(n);
    const res = Array(n);

    prefix[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = nums[i] * prefix[i - 1];
    }

    suffix[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = nums[i] * suffix[i + 1];
    }

    for (let i = 0; i < n; i++) {
        res[i] =
            (i > 0 ? prefix[i - 1] : 1) *
            (i < n - 1 ? suffix[i + 1] : 1);
    }

    return res;
};