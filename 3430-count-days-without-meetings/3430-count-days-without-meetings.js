/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    meetings.sort(([a], [b]) => a - b);
    let merged = [meetings[0]];

    for (let i = 1; i < meetings.length; i++) {
        let last = merged[merged.length - 1];
        let curr = meetings[i];

        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }


    let meetingDays = 0;
    for (let [start, end] of merged) {
        meetingDays += (end - start + 1);
    }

    return days - meetingDays;
};