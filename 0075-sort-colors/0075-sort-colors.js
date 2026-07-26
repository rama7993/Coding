/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const n = nums.length;
    let low = 0, mid = 0, high = n - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            swap(nums, low, mid);
            low++; mid++;
        } else if (nums[mid] === 2) {
            swap(nums, mid, high);
            high--;
        }
        else {
            mid++;
        }
    }
};

var swap = (nums, a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
}