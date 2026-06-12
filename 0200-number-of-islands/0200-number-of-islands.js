/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let cnt = 0;


    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') return 0;

        grid[x][y] = '0' //visited;
        for (const [dx, dy] of dir) {
            dfs(x + dx, y + dy)
        }
        return 1;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                cnt += dfs(i, j);
            }
        }
    }

    return cnt;
};