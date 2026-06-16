/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0, high = nums.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[high] < nums[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return nums[low];
};