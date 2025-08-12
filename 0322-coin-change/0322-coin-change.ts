function coinChange(coins: number[], amount: number): number {
    const n = coins.length;
    const dp = new Array(amount + 1).fill(Infinity);//coins required for each amount
    dp[0] = 0;

    for (let i = 0; i < n; i++) {// for each coin
        for (let a = coins[i]; a <= amount; a++) {
            const subProb = dp[a - coins[i]];
            dp[a] = Math.min(dp[a], subProb + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};