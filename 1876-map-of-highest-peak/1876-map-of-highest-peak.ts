function highestPeak(isWater: number[][]): number[][] {
    const m = isWater.length, n = isWater[0].length;
    let arr = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];//up, down, left, right

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                arr[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    for (let front = 0; front < queue.length; front++) {
        const [x, y] = queue[front];
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && arr[nx][ny] == -1) {
                arr[nx][ny] = arr[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    return arr;
};