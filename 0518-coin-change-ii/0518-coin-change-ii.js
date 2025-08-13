/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const n = coins.length;
    const memo = {};

    function dfs(i, amt) {
        if (amt === 0) return 1;
        if (amt < 0 || i >= n) return 0;

        const key = `${i}-${amt}`;
        if (key in memo) return memo[key];

        const take = dfs(i, amt - coins[i]);
        const skip = dfs(i + 1, amt);

        return memo[key] = skip + take;
    }

    return dfs(0, amount);
};