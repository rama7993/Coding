/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const n = coins.length;
    const memo = {};

    const dfs = (i, target) => {
        if (target === 0) return 0;
        if (target < 0 || i >= n) return Infinity;

        const key = `${i}#${target}`;
        if (key in memo) return memo[key];

        let take = 1 + dfs(i, target - coins[i]);
        let skip = dfs(i + 1, target);
        return memo[key] = Math.min(take, skip);
    }

    const ans = dfs(0, amount);
    return ans === Infinity ? -1 : ans;

};