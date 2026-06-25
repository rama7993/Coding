/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length
    let cost1 = cost[0], cost2 = cost[1];

    for (let i = 2; i < n; i++) {
        const temp = cost[i] + Math.min(cost1, cost2);
        cost1 = cost2;
        cost2 = temp;
    }

    return Math.min(cost1, cost2);
};