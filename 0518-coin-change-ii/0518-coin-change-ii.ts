function change(amount: number, coins: number[]): number {
    const n = coins.length;
    const dp = Array(amount + 1).fill(0);// ways to make amout 
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            const subProb = dp[i - coin];
            dp[i] += subProb;
        }
    }

    return dp[amount];
};