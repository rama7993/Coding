function countBadPairs(nums: number[]): number {
    const n = nums.length, freq = new Map<number, number>();
    const totalPairs = (n * (n - 1)) / 2;
    let cnt = 0, goodPairs = 0;
    for (let i = 0; i < n; i++) {
        let diff = nums[i] - i;
        if (freq.has(diff)) {
            goodPairs += freq.get(diff);
            freq.set(diff, freq.get(diff) + 1);
        } else {
            freq.set(diff, 1);
        }
    }
    return totalPairs - goodPairs;
};