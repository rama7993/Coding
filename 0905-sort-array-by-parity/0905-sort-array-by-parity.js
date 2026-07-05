/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const n = nums.length;
    let i = 0, j = n - 1;

    while (i < j) {
        if (nums[i] % 2 === 0) {// even
            i++;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
        }
    }

    return nums;
};