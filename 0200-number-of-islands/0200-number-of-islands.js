/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length, n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    let islands = 0;
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || grid[i][j] !== '1') return;
        visited[i][j] = true;

        for (const [dx, dy] of dir) {
            dfs(i + dx, j + dy);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                islands++;
                dfs(i, j);
            }
        }
    }
    return islands;
};