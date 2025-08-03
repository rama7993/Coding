function numEnclaves(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    const dir = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let cnt = 0;

    const isBorder = (i, j) => {
        return i === 0 || i === m - 1 || j === 0 || j === n - 1;
    }

    const dfs = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== 1) return;
        grid[i][j] = -1;

        for (const [dx, dy] of dir) {
            dfs(dx + i, j + dy);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isBorder(i, j) && grid[i][j] === 1) {
                dfs(i, j)
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) cnt++;
        }
    }
    return cnt;

};