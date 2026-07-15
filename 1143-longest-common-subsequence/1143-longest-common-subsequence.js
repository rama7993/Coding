/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length, n = text2.length;
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    const common = (i, j) => {
        if (i < 0 || j < 0) return 0;

        if (memo[i][j] !== -1) return memo[i][j];

        if (text1.at(i) === text2.at(j)) {
            memo[i][j] = 1 + common(i - 1, j - 1);
        }
        else {
            memo[i][j] = Math.max(common(i, j - 1), common(i - 1, j))
        }

        return memo[i][j];
    }


    return common(m - 1, n - 1);
};