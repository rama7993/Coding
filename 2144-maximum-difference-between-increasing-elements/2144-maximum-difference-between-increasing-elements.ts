function maximumDifference(nums: number[]): number {
    const n = nums.length;
    let min = nums[0], maxDiff = -1;

    for (let i = 1; i < n; i++) {
        if (min < nums[i]) {
            maxDiff = Math.max(nums[i] - min, maxDiff);
        } else {
            min = nums[i];
        }

    }
    return maxDiff;
};