function applyOperations(nums: number[]): number[] {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

    const arr: number[] = nums.filter((num) => Boolean(num));
    return arr.concat(Array(n - arr.length).fill(0));

};