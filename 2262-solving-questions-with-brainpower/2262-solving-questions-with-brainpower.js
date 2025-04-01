/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    const n = questions.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const points = questions[i][0];
        const skip = questions[i][1];

        const nextIndex = i + skip + 1;
        dp[i] = Math.max(points + (nextIndex < n ? dp[nextIndex] : 0), dp[i + 1]);
    }

    return dp[0];
};