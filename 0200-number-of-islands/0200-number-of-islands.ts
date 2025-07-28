function numIslands(grid: string[][]): number {
    const m = grid.length, n = grid[0].length;
    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    let islands = 0;
    const dir = [[-1, 0], [0, 1], [0, -1], [1, 0]];

    const bfs = (i: number, j: number) => {
        const queue: [number, number][] = [[i, j]];
        visited[i][j] = true;

        while (queue.length) {
            const [x, y] = queue.shift()!;
            for (let [dx, dy] of dir) {
                const nx = x + dx, ny = y + dy;
                if (
                    nx >= 0 && nx < m &&
                    ny >= 0 && ny < n &&
                    !visited[nx][ny] &&
                    grid[nx][ny] === '1'
                ) {
                    queue.push([nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                islands++;
                bfs(i, j);
            }
        }
    }
    return islands;
};