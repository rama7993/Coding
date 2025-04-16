function countGood(nums: number[], k: number): number {
    const n = nums.length;
    const freq = new Map<number, number>();
    let res = 0, pairs = 0, left = 0;

    for (let right = 0; right < n; right++) {
        const val = nums[right];
        const count = freq.get(val) || 0;
        pairs += count;
        freq.set(val, count + 1);

        while (pairs >= k) {
            res += n - right;
            const shrink = nums[left++];
            freq.set(shrink, freq.get(shrink) - 1);
            pairs -= freq.get(shrink);

        }
    }

    return res;
}
