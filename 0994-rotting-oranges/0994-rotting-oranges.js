/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length, n = grid[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const q = new Queue();
    let time = 0;
    let fresh = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) fresh++;
            else if (grid[i][j] === 2) q.enqueue([i, j]);
        }
    }

    if (fresh === 0) return 0;

    while (!q.isEmpty() && fresh > 0) {
        const size = q.size();

        for (let i = 0; i < size; i++) {
            const [x, y] = q.dequeue();
            for (const [dx, dy] of dirs) {
                const nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                    q.enqueue([nx, ny]);
                    grid[nx][ny] = 2;
                    fresh--;
                }
            }
        }

        time++;
    }

    return fresh === 0 ? time : -1;
};