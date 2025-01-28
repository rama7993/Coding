function findMaxFish(grid: number[][]): number {
    const rows: number = grid.length;
    const cols: number = grid[0].length;
    const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
    const directions: [number, number][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const bfs = (startX: number, startY: number): number => {
        let totalFish: number = 0;
        const queue: [number, number][] = [[startX, startY]];
        visited[startX][startY] = true;

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            totalFish += grid[x][y];

            // Explore all valid neighboring cells
            for (const [dx, dy] of directions) {
                const nx: number = x + dx;
                const ny: number = y + dy;

                if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny] && grid[nx][ny] > 0) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return totalFish;
    };

    let maxFish: number = 0;
    // Traverse each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] > 0 && !visited[i][j]) {
                maxFish = Math.max(maxFish, bfs(i, j));
            }
        }
    }

    return maxFish;
}
