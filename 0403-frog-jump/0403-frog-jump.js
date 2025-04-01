/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    const n = stones.length;
    const stoneSet = new Set(stones);
    const memo = new Map();

    const ways = (idx, jump) => {
        if (!stoneSet.has(idx)) return false;
        if (idx === stones[n - 1]) return true;

        if (memo.has(`${idx}-${jump}`)) {
            return memo.get(`${idx}-${jump}`);
        }

        // jump-1, jump, or jump+1
        const canReach = (jump - 1 > 0 && ways(idx + (jump - 1), jump - 1)) ||
            ways(idx + jump, jump) ||
            ways(idx + (jump + 1), jump + 1);

        memo.set(`${idx}-${jump}`, canReach);
        return canReach;
    };

    return stones[0] + 1 === stones[1] && ways(stones[1], 1);
};