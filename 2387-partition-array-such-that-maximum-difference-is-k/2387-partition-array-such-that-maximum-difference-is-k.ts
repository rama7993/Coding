function partitionArray(nums: number[], k: number): number {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let min = nums[0], cnt = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - min > k) {
            cnt++;
            min = nums[i];
        }
    }

    return cnt + 1;
};