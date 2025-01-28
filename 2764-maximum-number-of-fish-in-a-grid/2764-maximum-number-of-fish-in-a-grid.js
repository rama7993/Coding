/**
 * @param {number[][]} grid
 * @return {number}
 */

var findMaxFish = function (grid) {
    const m = grid.length, n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    let maxFish = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0 && !visited[i][j]) {
                maxFish = Math.max(maxFish, dfs(i, j, grid, visited));
            }
        }
    }
    return maxFish;
};

var dfs = function (row, col, grid, visited) {
    const m = grid.length, n = grid[0].length;
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === 0 || visited[row][col]) return 0; // Return 0 for invalid cases
    let fish = grid[row][col];
    visited[row][col] = true;
    fish += dfs(row, col - 1, grid, visited); // Left
    fish += dfs(row, col + 1, grid, visited); // Right
    fish += dfs(row - 1, col, grid, visited); // Up
    fish += dfs(row + 1, col, grid, visited); // Down
    return fish;
};
