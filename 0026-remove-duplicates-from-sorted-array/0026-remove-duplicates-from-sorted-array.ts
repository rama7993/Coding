function removeDuplicates(nums: number[]): number {
    let cnt = 0, j = 0;
    const n = nums.length;

    for (let i = 1; i < n; i++) {
        if (nums[j] != nums[i]) j++;
        nums[j] = nums[i];
    }

    return j + 1;
};