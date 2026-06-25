function longestPalindrome(s: string): string {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(false)); //dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    let start = 0, maxLen = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > maxLen) {
                    start = i;
                    maxLen = j - i + 1;
                }
            }

        }
    }

    return s.substring(start, start + maxLen);
};