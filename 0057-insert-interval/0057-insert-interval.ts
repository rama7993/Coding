function insert(intervals: number[][], newInterval: number[]): number[][] {
    const n: number = intervals.length;
    const merged: number[][] = [];

    for (const interval of intervals) {
        const [start, end] = interval;

        if (end < newInterval[0]) { //before newInterval
            merged.push(interval);
        } else if (start > newInterval[1]) { //after newInterval
            merged.push(newInterval);
            newInterval = [start, end];
        } else { //overlap
            newInterval = [Math.min(start, newInterval[0]), Math.max(end, newInterval[1])]
        }
    }

    merged.push(newInterval);
    return merged;
};