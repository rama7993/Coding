/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const m = grid.length, n = grid[0].length;
    let res = 0;
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || grid[i][j] === 0) return 0;
        visited[i][j] = true;

        let area = 1;
        for (const [dx, dy] of dir) {
            area += dfs(i + dx, j + dy);
        }

        return area;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                res = Math.max(res, dfs(i, j));
            }
        }
    }

    return res;
};