function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let count = 0;
    let minPos = -1, maxPos = -1, leftBound = -1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // If out of bounds, reset the bounds
        if (num < minK || num > maxK) {
            leftBound = i;
            minPos = -1;
            maxPos = -1;
        }

        if (num === minK) minPos = i;
        if (num === maxK) maxPos = i;

        // The valid subarray ends at `i` and starts after `leftBound`
        if (minPos !== -1 && maxPos !== -1) {
            count += Math.max(0, Math.min(minPos, maxPos) - leftBound);
        }
    }

    return count;
}
