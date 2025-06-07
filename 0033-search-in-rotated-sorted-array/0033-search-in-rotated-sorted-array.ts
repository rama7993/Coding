function search(nums: number[], target: number): number {
    const n = nums.length;
    let low = 0, high = n - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[low] <= nums[mid]) {    // Left half is sorted
            if (nums[low] <= target && target < nums[mid]) high = mid - 1;
            else low = mid + 1;

        } else { // Right half is sorted
            if (nums[mid] < target && target <= nums[high]) low = mid + 1;
            else high = mid - 1;
        }
    }

    return -1;
};