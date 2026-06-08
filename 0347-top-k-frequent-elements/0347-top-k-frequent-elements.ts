function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    const n: number = nums.length;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // index = frequency, value = numbers with that frequency
    const buckets: number[][] = Array.from(
        { length: n + 1 },
        () => []
    );

    for (const [key, count] of freq) {
        buckets[count].push(key);
    }

    const res: number[] = [];
    //Travserse from high freq to low freq buckets
    for (let i = n; i >= 0 && res.length < k; i--) {
        res.push(...buckets[i]);
    }

    return res.slice(0, k);
};