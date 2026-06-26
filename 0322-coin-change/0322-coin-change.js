/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const n = coins.length;
    const dp = Array(amount + 1).fill(Infinity); // min coins to make amount
    dp[0] = 0;

    for (let target = 1; target <= amount; target++) {
        for (const coin of coins) {//target for each coin
            if (target >= coin) {
                let subProb = dp[target - coin];
                dp[target] = Math.min(dp[target], 1 + subProb);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};