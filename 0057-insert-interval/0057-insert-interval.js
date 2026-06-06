/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const n = intervals.length;
    let i = 0;
    const merged = [];

    // Add intervals before new Interval
    while (i < n && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }

    //Merge intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    merged.push(newInterval);

    // Add remaining 
    while (i < n) {
        merged.push(intervals[i]);
        i++;
    }


    return merged;
};