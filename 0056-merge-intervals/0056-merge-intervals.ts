function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const n = merged.length;
        const curr = intervals[i];

        if (merged[n - 1][1] >= curr[0]) {
            merged[n - 1][1] = Math.max(curr[1], merged[n - 1][1]);
        } else {
            merged.push(curr)
        }
    }


    return merged;
};