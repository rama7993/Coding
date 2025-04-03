/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let res = 0;
    let leftMax = nums[0];
    let maxPairValue = -Infinity;

    for (let j = 1; j < nums.length - 1; j++) {
        maxPairValue = Math.max(maxPairValue, leftMax - nums[j]);
        res = Math.max(res, maxPairValue * nums[j + 1]);
        leftMax = Math.max(leftMax, nums[j]);
    }

    return res;
};