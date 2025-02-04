function removeElement(nums: number[], val: number): number {
    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (val === nums[i]) {
            nums[i] = Infinity;
            cnt++
        }
    }
    nums.sort((a, b) => a - b);
    return n - cnt;
};