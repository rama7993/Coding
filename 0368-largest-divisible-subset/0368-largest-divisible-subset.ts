function largestDivisibleSubset(nums: number[]): number[] {
    const n = nums.length;
    if (n === 0) return [];

    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);

    nums.sort((a, b) => a - b);

    let maxIdx = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }

        if (dp[i] > dp[maxIdx]) {
            maxIdx = i;
        }
    }

    // Reconstruct the subset
    const res: number[] = [];
    for (let i = maxIdx; i >= 0; i = prev[i]) {
        res.push(nums[i]);
    }

    return res;
}
