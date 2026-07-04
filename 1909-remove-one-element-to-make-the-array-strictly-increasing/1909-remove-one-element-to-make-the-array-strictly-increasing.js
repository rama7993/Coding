/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    let cnt = 0;
    const n = nums.length;

    for (let i = 1; i < n; i++) {
        if (nums[i] <= nums[i - 1]) {
            cnt++;
            if (cnt > 1) return false;

            if (i > 1 && nums[i] <= nums[i - 2]) {
                // Remove nums[i];
                nums[i] = nums[i - 1];
            } else {
                // Remove nums[i-1];
            }
        }
    }

    return true;
};