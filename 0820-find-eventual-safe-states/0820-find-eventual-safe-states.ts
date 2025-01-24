
function eventualSafeNodes(graph: number[][]): number[] {
    const n = graph.length;
    const reverseGraph: number[][] = Array.from({ length: n }, () => []);
    const outDegree: number[] = new Array(n).fill(0);
    const safeNodes: number[] = [];
    const queue: number[] = [];

    // Build the reverse graph and calculate the out-degrees
    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            reverseGraph[neighbor].push(i);
        }
        outDegree[i] = graph[i].length;
    }

    // Add terminal nodes (out-degree 0) to the queue
    for (let i = 0; i < n; i++) {
        if (outDegree[i] === 0) {
            queue.push(i);
        }
    }
    // Process nodes in reverse topological order
    while (queue.length > 0) {
        const node = queue.shift()!;
        safeNodes.push(node);
        for (const neighbor of reverseGraph[node]) {
            outDegree[neighbor]--;
            if (outDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return safeNodes.sort((a, b) => a - b);
}

