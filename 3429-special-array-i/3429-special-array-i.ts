function isArraySpecial(nums: number[]): boolean {
    const n = nums.length;
    if (n === 1) return true;

    for (let i = 0; i < n - 1; i++) {
        if ((nums[i] & 1) === (nums[i + 1] & 1)) return false;
    }

    return true;
}
