function numDecodings(s: string): number {
    const n = s.length;
    const dp = Array(n + 1).fill(0); // decode first i
    dp[0] = 1; //empty 
    dp[1] = s.charAt(0) === '0' ? 0 : 1;

    for (let i = 2; i <= n; i++) {
        let ways = 0;

        //1 digit
        if (s.charAt(i - 1) !== '0') {
            ways += dp[i - 1];
        }

        //2 digit
        if (
            s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6')
        ) {
            ways += dp[i - 2];
        }
        dp[i] = ways;
    }
    return dp[n];
};