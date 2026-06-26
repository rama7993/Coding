/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const n = s.length;
    const dp = Array(n + 1).fill(0);
    dp[n] = 1;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            dp[i] = 0;
            continue;
        }
        let ways = dp[i + 1];
        if (
            i + 1 < n &&
            (s[i] === '1' || (s[i] === '2' && s[i + 1] <= '6'))
        ) {
            ways += dp[i + 2];
        }
        dp[i] = ways;
    }
    return dp[0];
};