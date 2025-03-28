function maxPoints(grid: number[][], queries: number[]): number[] {
    const m = grid.length, n = grid[0].length, k = queries.length;
    const res = new Array(k).fill(0);
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const queryIndices = queries.map((q, i) => [q, i]);
    queryIndices.sort((a, b) => a[0] - b[0]);


    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const pq = new MinPriorityQueue(x => x[0]);

    pq.enqueue([grid[0][0], 0, 0]);
    visited[0][0] = true;
    let count = 0;


    for (const [query, index] of queryIndices) {
        while (!pq.isEmpty() && pq.front()[0] < query) {
            const [node, x, y] = pq.dequeue();
            count += 1;

            for (const [dx, dy] of dir) {
                const nx = x + dx, ny = y + dy;

                if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                    pq.enqueue([grid[nx][ny], nx, ny]);
                    visited[nx][ny] = true;
                }
            }
        }

        res[index] = count;
    }

    return res;
}
