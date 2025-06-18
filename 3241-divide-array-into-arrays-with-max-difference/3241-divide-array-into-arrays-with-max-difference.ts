function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let res = [];

    for (let i = 0; i < n; i += 3) {
        const a = nums[i], b = nums[i + 1], c = nums[i + 2];

        if (c - a > k) return [];

        res.push([a, b, c])
    }

    return res;
};