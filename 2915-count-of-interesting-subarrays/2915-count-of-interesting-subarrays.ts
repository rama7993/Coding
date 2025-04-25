function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    let count = 0;
    let equals = 0;
    const mp = new Map<number, number>();
    mp.set(0, 1);

    for (let num of nums) {
        if (num % modulo === k) equals++;
        const rem = equals % modulo;
        const needed = (rem - k + modulo) % modulo;
        count += mp.get(needed) || 0;
        mp.set(rem, (mp.get(rem) || 0) + 1);
    }

    return count;
}
