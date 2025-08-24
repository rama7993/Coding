function longestSubarray(nums: number[]): number {
    const n = nums.length;
    let left = 0, zeroCount = 0, res = 0;

    for (let right = 0; right < n; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        res = Math.max(res, right - left);
    }

    return res;
};