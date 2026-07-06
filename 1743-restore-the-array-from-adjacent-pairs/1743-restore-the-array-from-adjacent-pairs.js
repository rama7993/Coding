/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    const n = adjacentPairs.length;
    const mp = new Map(); // key -> arr;
    let res = Array(n + 1).fill(Infinity);

    for (const [u, v] of adjacentPairs) {
        if (!mp.has(u)) {
            mp.set(u, [])
        }
        if (!mp.has(v)) {
            mp.set(v, [])
        }
        mp.get(u).push(v);
        mp.get(v).push(u);
    }

    for (const [key, val] of mp) {
        if (val.length === 1) {
            res[0] = key;
            res[1] = val[0];
            break;
        }
    }

    for (let i = 2; i <= n; i++) {
        const [a, b] = mp.get(res[i - 1]);

        res[i] = (a === res[i - 2]) ? b : a;
    }

    return res;
};