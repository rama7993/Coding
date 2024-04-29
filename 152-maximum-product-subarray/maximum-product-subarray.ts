function maxProduct(nums: number[]): number {
    let MaxProd = nums[0], MinProd = nums[0], res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        const prevMaxProd = MaxProd;
        const prevMinProd = MinProd;
        MaxProd = Math.max(curr, prevMinProd * curr, prevMaxProd * curr);
        MinProd = Math.min(curr, prevMinProd * curr, prevMaxProd * curr);
        res = Math.max(res, MaxProd, MinProd);
    }
    return res;
};