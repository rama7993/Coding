/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
    const n = edges.length;
    const dsuf = Array(n + 1).fill(-1);

    const find = (dsuf, v) => {
        if (dsuf[v] === -1) return v;
        return dsuf[v] = find(dsuf, dsuf[v]); // Path compression
    };

    for (const [u, v] of edges) {
        const parent_u = find(dsuf, u);
        const parent_v = find(dsuf, v);

        if (parent_u === parent_v) return [u, v]; // Cycle detected

        dsuf[parent_u] = parent_v; // Union operation
    }
};
