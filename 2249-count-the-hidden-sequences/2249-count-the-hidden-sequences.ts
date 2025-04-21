function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let curr = 0, minSum = 0, maxSum = 0;
    for (let diff of differences) {
        curr += diff;
        minSum = Math.min(minSum, curr);
        maxSum = Math.max(maxSum, curr);
    }

    // lower <= x + minSum && upper >= x + maxSum=> x in [lower - minSum, upper - maxSum]
    const minStart = lower - minSum;
    const maxStart = upper - maxSum;
    const count = maxStart - minStart + 1;
    return Math.max(0, count);
};