/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;

    let maxProfit = 0;
    let min = prices[0];

    for (let i = 1; i < n; i++) {
        min = Math.min(min, prices[i]); // lowest price so far
        const profit = prices[i] - min; // profit if sold today
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
};