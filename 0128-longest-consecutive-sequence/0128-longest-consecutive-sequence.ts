function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums);
    let res: number = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let cnt: number = 1;
            while (set.has(num + cnt)) {
                cnt++;
            }
            res = Math.max(cnt, res);
        }
    }

    return res;
};