function maxFrequencyElements(nums: number[]): number {
    const mp = new Map<number, number>();
    let max = 1, cnt = 0;

    for (const num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
        max = Math.max(max, mp.get(num));
    }

    for (const [key, val] of mp.entries()) {
        if (val === max) cnt += max;
    }

    return cnt;
};