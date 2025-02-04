function maxAscendingSum(nums: number[]): number {
    const n = nums.length;
    let sum = nums[0], res = nums[0];
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            sum += nums[i + 1];
            res = Math.max(sum, res);
        } else {
            sum = nums[i + 1];
        }
    }

    return res;
};