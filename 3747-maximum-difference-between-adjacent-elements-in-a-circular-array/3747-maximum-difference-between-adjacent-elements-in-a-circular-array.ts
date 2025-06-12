function maxAdjacentDistance(nums: number[]): number {
    const n = nums.length;
    let diff = 0;
    for (let i = 0; i < n; i++) {
        const d = Math.abs(nums[i] - nums[(i + 1) % n]);
        diff = Math.max(diff, d);
    }
    return diff;
};