/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    let pos = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i]
        }
    }

    while (pos < n) {
        nums[pos++] = 0;
    }

    return nums;

};