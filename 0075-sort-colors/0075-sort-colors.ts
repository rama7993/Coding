/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const n = nums.length;
    let low = 0, high = n - 1, mid = 0;

    while (mid <= high) {
        if (nums[mid] === 0) {//Swap it with low
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++; mid++
        }
        else if (nums[mid] === 1) {//Dont Swap ,correct positon
            mid++;
        } else {// Swap it with high
            [nums[high], nums[mid]] = [nums[mid], nums[high]];
            high--;
        }
    }
};