const minTimeToReach = (grid: number[][]): number => {
    const rows = grid.length;
    const cols = grid[0].length;
    const dir = [0, 1, 0, -1, 0];

    // Min-heap priority queue: [arrivalTime, x, y]
    const queue = new PriorityQueue<[number, number, number]>((a, b) => a[0] - b[0]);
    queue.push([0, 0, 0]); // Start at (0, 0) at time 0

    while (queue.size()) {
        const [currentTime, x, y] = queue.pop();

        // Skip already visited cells
        if (grid[y][x] === -1) continue;

        // Reached target cell
        if (x === cols - 1 && y === rows - 1) {
            return Math.max(grid[y][x], currentTime);
        }

        // Mark cell as visited
        grid[y][x] = -1;

        // Check all 4 adjacent cells
        for (let i = 0; i < 4; i++) {
            const newX = x + dir[i];
            const newY = y + dir[i + 1];

            if (newX < 0 || newX >= cols || newY < 0 || newY >= rows) continue;

            // Wait until the new cell is available, then move in 1 second
            const nextTime = Math.max(currentTime, grid[newY][newX]) + 1;
            queue.push([nextTime, newX, newY]);
        }
    }

    // Unreachable
    return -1;
}