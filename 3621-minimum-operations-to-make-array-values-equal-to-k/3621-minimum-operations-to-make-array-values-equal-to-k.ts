function minOperations(nums: number[], k: number): number {
    const min = Math.min(...nums);
    if (min < k) return -1;

    const mp = new Map<number, number>();
    for (let num of nums) {
        if (num > k) {
            mp.set(num, (mp.get(num) || 0) + 1);
        }
    }

    return mp.size;
}
