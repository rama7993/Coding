function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const q = [];//queue
    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                q.push([i, j]);
            }
        }
    }

    while (q.length) {
        const [x, y] = q.shift();
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && dist[nx][ny] > dist[x][y] + 1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }

    return dist;
};