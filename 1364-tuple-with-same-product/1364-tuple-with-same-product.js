/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
    const n = nums.length, productMap = {};
    let res = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let product = nums[i] * nums[j];
            productMap[product] = (productMap[product] || 0) + 1;
        }
    }

    for (let count of Object.values(productMap)) {
        if (count > 1) {
            pairs = count * (count - 1) / 2;
            res += pairs * 8;
        }
    }

    return res;
};