/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    const n = intervals.length
    if (n == 0) return 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let removals = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < n; i++) {
        const [start, end] = intervals[i];

        if (start < prevEnd) {
            removals++; //overlapping
        } else {
            prevEnd = end;
        }
    }
    return removals;
};