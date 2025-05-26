function largestPathValue(colors: string, edges: number[][]): number {
    const n = colors.length;
    const adj: number[][] = Array.from({ length: n }, () => []);
    const indegree: number[] = Array(n).fill(0);

    for (const [u, v] of edges) {
        adj[u].push(v);
        indegree[v]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // dp[node][color] = max times color appears on path to this node
    const dp = Array.from({ length: n }, () => Array(26).fill(0));
    let visited = 0;
    let maxColorCount = 0;

    while (queue.length) {
        const u = queue.shift()!;
        visited++;
        const colorIndex = colors.charCodeAt(u) - 'a'.charCodeAt(0);
        dp[u][colorIndex]++;

        maxColorCount = Math.max(maxColorCount, dp[u][colorIndex]);

        for (const v of adj[u]) {
            for (let c = 0; c < 26; c++) {
                dp[v][c] = Math.max(dp[v][c], dp[u][c]);
            }
            indegree[v]--;
            if (indegree[v] === 0) {
                queue.push(v);
            }
        }
    }

    return visited === n ? maxColorCount : -1;
}
