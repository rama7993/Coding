function minCapability(nums: number[], k: number): number {
    let low = Math.min(...nums), high = Math.max(...nums);
    let res;

    function canRob(capability: number, nums: number[], k: number): Boolean {
        let count = 0;
        for (let i = 0; i < nums.length;) {
            if (nums[i] <= capability) {
                count++;
                i += 2; // Skip the adjacent house
            } else {
                i++; // Move to the next house
            }
        }

        return count >= k;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (low <= high) {
            if (canRob(mid, nums, k)) {
                res = mid;
                high = mid - 1
            } else {
                low = mid + 1;
            }

        }
    }

    return res;
};