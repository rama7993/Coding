/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const prefix = Array(n); // till left of i
    const suffix = Array(n); // till right of i
    const res = Array(n);

    prefix[0] = 1;
    for (let i = 1; i < n; i++) {
        prefix[i] = nums[i - 1] * prefix[i - 1];
    }

    suffix[n - 1] = 1
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = nums[i + 1] * suffix[i + 1];
    }

    console.log(prefix, suffix);

    for (let i = 0; i < n; i++) {
        res[i] = prefix[i] * suffix[i];
    }

    return res;
};