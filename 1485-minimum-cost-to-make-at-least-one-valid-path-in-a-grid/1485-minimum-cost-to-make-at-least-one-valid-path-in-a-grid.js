/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
    const m = grid.length, n = grid[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const pq = [[0, 0, 0]]; // [cost, u (start vertex), v (end vertex)] //min-heap
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const isValidDirection = (i, j) => {
        return i >= 0 && i < m && j >= 0 && j < n && !visited[i][j];

    }

    while (pq.length) {
        pq.sort((a, b) => a[0] - b[0]);
        const [cost, u, v] = pq.shift();
        if (visited[u][v]) continue;
        if (u === m - 1 && v === n - 1) return cost;
        visited[u][v] = true;

        // 4 directions
        for (let dir = 0; dir < 4; dir++) {
            const x = u + directions[dir][0], y = v + directions[dir][1];
            if (isValidDirection(x, y)) {
                const newCost = (grid[u][v] === dir + 1) ? cost : cost + 1;
                pq.push([newCost, x, y]);
            }
        }
    }
    return -1;
};