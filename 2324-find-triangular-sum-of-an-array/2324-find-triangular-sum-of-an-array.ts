function triangularSum(nums: number[]): number {
    const n = nums.length;
    let res = 0n;             // BigInt
    let coeff = 1n;           // C(n-1,0) as BigInt

    for (let i = 0; i < n; i++) {
        res = (res + coeff * BigInt(nums[i])) % 10n;

        if (i < n - 1) {
            coeff = (coeff * BigInt(n - 1 - i)) / BigInt(i + 1); // BigInt division
        }
    }

    return Number(res);
};