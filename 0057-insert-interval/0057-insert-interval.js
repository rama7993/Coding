/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort(([a], [b]) => a - b);
    const merged = [intervals[0]];
    const n = intervals.length;

    for (let i = 1; i < n; i++) {
        const curr = intervals[i];
        const prev = merged.at(-1);

        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(curr[1], prev[1]);
        } else {
            merged.push(curr);
        }
    }

    return merged;
};