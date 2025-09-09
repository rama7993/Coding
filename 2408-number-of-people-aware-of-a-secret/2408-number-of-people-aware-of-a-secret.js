/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    const MOD = 1e9 + 7;
    const memo = new Map();

    const dfs = (day) => {
        if (day > n) return 0;
        if (memo.has(day)) return memo.get(day);
        let total = day + forget > n ? 1 : 0;
        for (let i = day + delay; i < day + forget && i <= n; i++) {
            total = (total + dfs(i)) % MOD;
        }
        memo.set(day, total);
        return total;
    }

    return dfs(1) % MOD;
};

