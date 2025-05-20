function isZeroArray(nums: number[], queries: number[][]): boolean {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);

    // Range updates
    for (const [l, r] of queries) {
        diff[l] -= 1;
        if (r + 1 < n) diff[r + 1] += 1;
    }

    // Prefix sum 
    let curr = 0;
    for (let i = 0; i < n; i++) {
        curr += diff[i];
        if (nums[i] + curr > 0) return false;
    }

    return true;
}
