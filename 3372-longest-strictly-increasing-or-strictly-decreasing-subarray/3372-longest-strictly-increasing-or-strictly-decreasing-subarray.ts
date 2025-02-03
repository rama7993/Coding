function longestMonotonicSubarray(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return 1;

    let decr = 1, incr = 1;
    let strictDecr = 1, strictIncr = 1;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {  // Decreasing sequence
            decr++;
            strictIncr = Math.max(strictIncr, incr);
            incr = 1;
        } else if (nums[i] < nums[i + 1]) {  // Increasing sequence
            incr++;
            strictDecr = Math.max(strictDecr, decr);
            decr = 1;
        } else {  // Equal elements
            strictDecr = Math.max(strictDecr, decr);
            strictIncr = Math.max(strictIncr, incr);
            decr = 1;
            incr = 1;
        }
    }

    return Math.max(strictDecr, strictIncr, decr, incr);
}
