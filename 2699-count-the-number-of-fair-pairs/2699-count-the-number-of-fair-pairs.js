/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b);
    //count of sum in [lower, upper] = count of sum < upper+1 - count of sum < lower
    return pairsBelowBound(nums, upper + 1) - pairsBelowBound(nums, lower);

};

function pairsBelowBound(nums, bound) {
    let i = 0, j = nums.length - 1;
    let pairs = 0;
    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum < bound) {
            pairs += j - i;
            i++;
        } else {
            j--;
        }
    }
    return pairs;
}
