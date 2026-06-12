/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length, n = grid[0].length;
    let fresh = 0, minutes = 0;
    const q = [];
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) q.push([i, j]);
            else if (grid[i][j] === 1) fresh++;
        }
    }

    if (fresh === 0) return 0;

    while (q.length && fresh > 0) {
        let size = q.length;

        for (let i = 0; i < size; i++) {
            const [x, y] = q.shift();

            for (let [dx, dy] of dir) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    fresh--;
                    q.push([nx, ny]);
                }
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};