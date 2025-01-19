/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
    const m = heightMap.length, n = heightMap[0].length;
    if (m < 3 || n < 3) return 0; // Not enough space to trap water

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const pq = new MinPriorityQueue({ priority: x => x[0] });//[[height, start, end]]
    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    let water = 0;

    // Push all boundary cells into the priority queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                pq.enqueue([heightMap[i][j], i, j]);
                visited[i][j] = true;
            }
        }
    }

    let maxHeight = 0;

    while (!pq.isEmpty()) {
        const [currHeight, u, v] = pq.dequeue().element;
        maxHeight = Math.max(maxHeight, currHeight);

        // Check all 4 directions
        for (let [dx, dy] of directions) {
            const x = u + dx, y = v + dy;
            if (x >= 0 && x < m && y >= 0 && y < n && !visited[x][y]) {
                if (heightMap[x][y] < maxHeight) {
                    water += maxHeight - heightMap[x][y];
                }
                pq.enqueue([heightMap[x][y], x, y]);
                visited[x][y] = true;
            }
        }
    }

    return water;
};