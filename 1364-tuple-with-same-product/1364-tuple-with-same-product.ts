function tupleSameProduct(nums: number[]): number {
    const n = nums.length, productMap = {};
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let product = nums[i] * nums[j];

            if (product in productMap) {
                count += productMap[product];
            }

            productMap[product] = (productMap[product] || 0) + 1;
        }
    }

    return count * 8;
}
