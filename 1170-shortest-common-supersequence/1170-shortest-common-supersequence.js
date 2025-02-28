/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    const m = str1.length, n = str2.length;

    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0)); //LCS table 
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) dp[i][j] = 0;
            else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    //Scs backtracking
    let i = m, j = n, scs = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            scs.push(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            scs.push(str1[i - 1]);  // Move up in dp table, add from str1
            i--;
        } else {
            scs.push(str2[j - 1]);  // Move left in dp table, add from str2
            j--;
        }

    }

    //Append remaining
    while (i > 0) {
        scs.push(str1[i - 1]);
        i--;
    }
    while (j > 0) {
        scs.push(str2[j - 1]);
        j--;
    }

    return scs.reverse().join('');
}