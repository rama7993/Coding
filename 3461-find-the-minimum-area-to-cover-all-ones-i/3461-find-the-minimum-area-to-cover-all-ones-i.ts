function minimumArea(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;

    let row1 = m, col1 = n, row2 = -1, col2 = -1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                row1 = Math.min(i, row1);
                col1 = Math.min(j, col1);
                row2 = Math.max(i, row2);
                col2 = Math.max(j, col2);
            }
        }
    }


    return (row2 - row1 + 1) * (col2 - col1 + 1);
};