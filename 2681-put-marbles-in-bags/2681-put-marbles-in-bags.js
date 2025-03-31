/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
    const n = weights.length;
    const adjSum = [];

    for (let i = 0; i < n - 1; i++) {
        adjSum.push(weights[i] + weights[i + 1]);
    }

    adjSum.sort((a, b) => a - b);

    if (k === 1) {
        return 0;
    }
    const minSum = adjSum.slice(0, k - 1).reduce((sum, val) => sum + val, 0);
    const maxSum = adjSum.slice(- (k - 1)).reduce((sum, val) => sum + val, 0);

    return maxSum - minSum;
};
