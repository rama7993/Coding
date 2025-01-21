function gridGame(grid: number[][]): number {
    const cols = grid[0].length;
    let row1Sum = grid[0].reduce((acc, curr) => acc + curr, 0);
    let row2Sum = 0;
    let minSum = Infinity;
    for (let i = 0; i < cols; i++) {
        row1Sum -= grid[0][i];
        minSum = Math.min(minSum, Math.max(row1Sum, row2Sum));
        row2Sum += grid[1][i];
    }
    return minSum;
};