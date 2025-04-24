function countCompleteSubarrays(nums: number[]): number {
    const totalDistinct = new Set(nums).size;
    const n = nums.length;
    let cnt = 0;

    for (let left = 0; left < n; left++) {
        const freq = new Map<number, number>();
        let distinct = 0;
        for (let right = left; right < n; right++) {
            const num = nums[right];
            if (!freq.has(num)) distinct++;
            freq.set(num, (freq.get(num) || 0) + 1);
            if (distinct === totalDistinct) cnt++;
        }
    }

    return cnt;
}
