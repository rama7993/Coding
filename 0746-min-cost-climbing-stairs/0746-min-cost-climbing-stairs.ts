function minCostClimbingStairs(cost: number[]): number {
    const dp = [0, 0];
    const n = cost.length
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(cost[i - 1] + dp[i - 1], cost[i - 2] + dp[i - 2]);
    }
    return dp[n];
};