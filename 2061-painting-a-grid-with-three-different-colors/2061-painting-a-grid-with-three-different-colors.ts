function colorTheGrid(m: number, n: number): number {
    const mod = 1e9 + 7;

    // Total number of combinations for a column with m cells, each with 3 colors
    const total = Math.pow(3, m);
    const good: number[] = [];
    const pattern: number[][] = Array.from({ length: total }, () => []);

    // Generate all possible patterns for a column and identify valid ones (no same adjacent color)
    for (let i = 0; i < total; i++) {
        let val = i;
        let valid = true;
        for (let j = 0; j < m; j++) {
            pattern[i][j] = val % 3;
            if (j > 0 && pattern[i][j] === pattern[i][j - 1]) {
                valid = false;
                break;
            }
            val = Math.floor(val / 3);
        }
        if (valid) good.push(i);
    }

    // Precompute valid transitions between columns
    const rowValid: boolean[][] = Array.from({ length: total }, () => Array(total).fill(false));
    for (const i of good) {
        for (const j of good) {
            let valid = true;
            for (let k = 0; k < m; k++) {
                if (pattern[i][k] === pattern[j][k]) {
                    valid = false;
                    break;
                }
            }
            rowValid[i][j] = valid;
        }
    }

    // DP table: dp[col][pattern] = ways to color col columns ending with 'pattern'
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(total).fill(0));
    for (const i of good) dp[1][i] = 1;

    for (let col = 2; col <= n; col++) {
        for (const i of good) {
            let sum = 0;
            for (const j of good) {
                if (rowValid[i][j]) {
                    sum = (sum + dp[col - 1][j]) % mod;
                }
            }
            dp[col][i] = sum;
        }
    }

    let ans = 0;
    for (let i = 0; i < total; i++) {
        ans = (ans + dp[n][i]) % mod;
    }

    return ans;
}
