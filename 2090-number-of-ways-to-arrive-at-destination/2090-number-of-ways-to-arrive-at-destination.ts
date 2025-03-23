function countPaths(n: number, roads: number[][]): number {
    const MOD = 1e9 + 7;
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v, time] of roads) {
        graph[u].push([v, time]);
        graph[v].push([u, time]);
    }

    // Min-heap priority queue [time, node]
    const pq = new MinPriorityQueue((entry: { node: number; time: number }) => entry.time);
    const dist: number[] = Array(n).fill(Infinity);
    const ways: number[] = Array(n).fill(0);
    dist[0] = 0;
    ways[0] = 1;

    pq.enqueue({ node: 0, time: 0 });


    while (!pq.isEmpty()) {
        const { node, time } = pq.dequeue();
        if (time > dist[node]) continue;

        for (const [neighbor, travelTime] of graph[node]) {
            const newTime = time + travelTime;

            // shorter path 
            if (newTime < dist[neighbor]) {
                dist[neighbor] = newTime;
                pq.enqueue({ node: neighbor, time: newTime });
                ways[neighbor] = ways[node];
            }
            // If another shortest path 
            else if (newTime === dist[neighbor]) {
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }

    return ways[n - 1];
}
