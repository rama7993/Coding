function largestIsland(grid: number[][]): number {
    const n = grid.length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const islandMap = new Map<number, number>();
    let islandId = 2, maxIsland = 0;

    function dfs(i: number, j: number, id: number): number {
        if (i < 0 || j < 0 || i >= n || j >= n || grid[i][j] !== 1) return 0;
        grid[i][j] = id;
        let size = 1;
        for (const [dx, dy] of directions) {
            size += dfs(i + dx, j + dy, id);
        }
        return size;
    }

    // 1: Label islands and store sizes
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const size = dfs(i, j, islandId);
                islandMap.set(islandId, size);
                maxIsland = Math.max(maxIsland, size);
                islandId++;
            }
        }
    }

    // 2: Flipping each `0` to `1`
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                const seenIslands = new Set<number>();
                let newSize = 1; // Start with flipped cell

                for (const [dx, dy] of directions) {
                    const x = i + dx, y = j + dy;
                    if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] > 1) {
                        seenIslands.add(grid[x][y]);
                    }
                }

                for (const id of seenIslands) {
                    newSize += islandMap.get(id) || 0;
                }

                maxIsland = Math.max(maxIsland, newSize);
            }
        }
    }

    return maxIsland;
}
