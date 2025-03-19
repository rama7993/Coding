function minOperations(nums: number[]): number {
    const n = nums.length;
    let count = 0;

    for (let i = 0; i <= n - 3; i++) {
        if (nums[i] === 0) {
            nums[i] ^= 1;
            nums[i + 1] ^= 1;
            nums[i + 2] ^= 1;
            count++;
        }
    }

    return (nums[n - 2] === 1 && nums[n - 1] === 1) ? count : -1;
};