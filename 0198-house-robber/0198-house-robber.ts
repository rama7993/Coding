function rob(nums: number[]): number {
    const n = nums.length;

    let rob1 = 0; // till i-2;
    let rob2 = 0; // till i-1;

    for (const num of nums) {
        const temp = Math.max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }

    return rob2;
};