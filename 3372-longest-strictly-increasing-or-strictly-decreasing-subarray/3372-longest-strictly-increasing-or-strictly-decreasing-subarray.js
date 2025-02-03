/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let incr = 1, decr = 1, maxLen = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            incr++;
            decr = 1; // Reset decreasing count
        } else if (nums[i] < nums[i - 1]) {
            decr++;
            incr = 1; // Reset increasing count
        } else {
            incr = 1;
            decr = 1;
        }
        maxLen = Math.max(maxLen, incr, decr);
    }

    return maxLen;
};