/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    const mp = new Map();
    let cnt = 0;

    for (const t of time) {
        const rem = t % 60;
        const target = (60 - rem) % 60;

        cnt += mp.get(target) || 0;
        mp.set(rem, (mp.get(rem) || 0) + 1);
    }

    return cnt;
};