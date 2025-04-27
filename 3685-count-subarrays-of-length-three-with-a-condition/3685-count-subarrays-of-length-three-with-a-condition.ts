function countSubarrays(nums: number[]): number {
    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i <= n - 3; i++) {
        const sum = nums[i] + nums[i + 2];
        if (2 * sum === nums[i + 1]) {
            cnt++;
        }
    }
    return cnt;
}
