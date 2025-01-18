function minCost(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;

    // Define directions: Right, Left, Down, Up
    const directions: [number, number][] = [
        [0, 1],  // Right
        [0, -1], // Left
        [1, 0],  // Down
        [-1, 0]  // Up
    ];

    // Initialize cost grid with Infinity
    const cost: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));

    // Min-heap: [cost, row, column]
    const pq: [number, number, number][] = [];
    pq.push([0, 0, 0]);
    cost[0][0] = 0;

    while (pq.length > 0) {
        // Pop the element with the minimum cost
        pq.sort((a, b) => a[0] - b[0]);
        const [currCost, i, j] = pq.shift()!;

        // Early exit if destination is reached
        if (i === m - 1 && j === n - 1) {
            return currCost;
        }

        // Explore all four directions
        for (let dir: number = 0; dir < 4; dir++) {
            const ni: number = i + directions[dir][0];
            const nj: number = j + directions[dir][1];

            // Check boundaries
            if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                // Calculate new cost
                const newCost: number = (grid[i][j] === dir + 1) ? currCost : currCost + 1;

                // Update if this path is cheaper
                if (newCost < cost[ni][nj]) {
                    cost[ni][nj] = newCost;
                    pq.push([newCost, ni, nj]);
                }
            }
        }
    }

    // Return the cost to reach the bottom-right cell
    return cost[m - 1][n - 1];
}
