function rob(nums: number[]): number {
    const n = nums.length;
    const memo = Array(n).fill(-1);

    const ways = (i: number) => {
        if (i >= n) return 0;
        if (memo[i] !== -1) return memo[i];
        const way1 = nums[i] + ways(i + 2);
        const way2 = ways(i + 1);
        memo[i] = Math.max(way1, way2);
        return memo[i];
    }

    return ways(0);
};