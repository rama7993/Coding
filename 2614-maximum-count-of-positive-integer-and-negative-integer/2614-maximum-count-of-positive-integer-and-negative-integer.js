/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let firstNonNegative = findFirstNonNegative(nums);
    let firstPositive = findFirstPositive(nums);

    let negativeCount = firstNonNegative;
    let positiveCount = nums.length - firstPositive;

    return Math.max(negativeCount, positiveCount);
}

function findFirstNonNegative(nums) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < 0) left = mid + 1;
        else right = mid;
    }
    return left;  // First index where nums[index] >= 0
}

function findFirstPositive(nums) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] <= 0) left = mid + 1;
        else right = mid;
    }
    return left;  // First index where nums[index] > 0
}
