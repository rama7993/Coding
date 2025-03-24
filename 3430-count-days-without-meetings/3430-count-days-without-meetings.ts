function countDays(days: number, meetings: number[][]): number {
    meetings.sort(([a], [b]) => a - b);
    let merged: number[][] = [meetings[0]];
    let res = 0;

    // Merge overlapping meetings
    for (let i = 1; i < meetings.length; i++) {
        let last = merged[merged.length - 1];
        let curr = meetings[i];

        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }

    // days before first meeting
    res += merged[0][0] - 1;
    for (let i = 1; i < merged.length; i++) {
        res += merged[i][0] - merged[i - 1][1] - 1;
    }
    // days after last meeting
    res += days - merged[merged.length - 1][1];

    return res;
}
