function buildArray(nums: number[]): number[] {
    let res = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        res.push(nums[nums[i]]);
    }
    return res;
};