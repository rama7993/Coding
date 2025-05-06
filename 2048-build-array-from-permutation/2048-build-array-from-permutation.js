/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    const n = nums.length;

    // Encode both old and new values into nums[i]
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] + n * (nums[nums[i]] % n);
    }

    // Extract the new values
    for (let i = 0; i < n; i++) {
        nums[i] = Math.floor(nums[i] / n);
    }

    return nums;
};
