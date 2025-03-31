function putMarbles(weights: number[], k: number): number {
    const n = weights.length;
    const adjSum = [];
    for (let i = 0; i < n - 1; i++) {
        adjSum.push(weights[i] + weights[i + 1]);
    }
    adjSum.sort((a, b) => a - b);
    let minSum = 0, maxSum = 0;

    for (let i = 0; i < k - 1; i++) {
        minSum += adjSum[i];
        maxSum += adjSum[adjSum.length - i - 1];
    }

    return maxSum - minSum;
};