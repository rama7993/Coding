/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    let prefixSum = 0;
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        prefixSum += nums[i];
        const suffixSum = totalSum - prefixSum;
        if (prefixSum >= suffixSum) {
            count++;
        }
    }
    return count;
};