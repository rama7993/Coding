function subsetXORSum(nums: number[]): number {
    let ans = 0;

    const subsets = (idx, xor) => {
        if (idx === nums.length) {
            ans += xor;
            return;
        }
        subsets(idx + 1, xor);
        subsets(idx + 1, xor ^ nums[idx]);
    }

    subsets(0, 0);
    return ans;
};