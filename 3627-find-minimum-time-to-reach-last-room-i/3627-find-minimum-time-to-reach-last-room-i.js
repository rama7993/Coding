/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function (grid) {
    const DIRECTIONS = [0, 1, 0, -1, 0];
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    // Queue stores: [arrivalTime, x, y]
    const queue = [];
    queue.push([0, 0, 0]); // Start at (0, 0) at time 0

    while (queue.length > 0) {
        // Sort the queue based on time (min-heap behavior)
        queue.sort((a, b) => a[0] - b[0]);
        const [currentTime, x, y] = queue.shift(); // Pop the first element (smallest time)

        // Skip already visited cells
        if (visited[y][x]) continue;

        // Mark cell as visited
        visited[y][x] = true;

        // Reached target cell
        if (x === cols - 1 && y === rows - 1) {
            return Math.max(grid[y][x], currentTime);
        }

        // Check all 4 adjacent cells
        for (let i = 0; i < 4; i++) {
            const newX = x + DIRECTIONS[i];
            const newY = y + DIRECTIONS[i + 1];

            if (newX < 0 || newX >= cols || newY < 0 || newY >= rows || visited[newY][newX]) continue;

            // Wait until the new cell is available, then move in 1 second
            const nextTime = Math.max(currentTime, grid[newY][newX]) + 1;
            queue.push([nextTime, newX, newY]);
        }
    }

    // Unreachable
    return -1;


};