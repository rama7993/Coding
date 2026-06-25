/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const n = s.length;
    const memo = {};

    const dfs = (idx) => {
        if (idx >= n) return 1;
        if (s[idx] === '0') return 0;
        if (memo[idx]) return memo[idx];
        let ways = dfs(idx + 1);
        if (idx + 1 < n && (s[idx] === '1' || (s[idx] === '2' && s[idx + 1] <= '6'))) {
            ways += dfs(idx + 2);
        }
        return memo[idx] = ways;
    }

    return dfs(0);
};