function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
    // Function to build adjacency list from edge list
    const buildGraph = (edges: number[][]): number[][] => {
        const n = edges.length + 1;
        const graph: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }
        return graph;
    };

    // DFS to count reachable nodes within depth d
    const dfs = (graph: number[][], node: number, parent: number, depth: number): number => {
        if (depth < 0) return 0;
        let count = 1; // Count the current node
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                count += dfs(graph, neighbor, node, depth - 1);
            }
        }
        return count;
    };

    const graph1 = buildGraph(edges1);
    const graph2 = buildGraph(edges2);

    const n = graph1.length;
    const m = graph2.length;

    // Compute the maximum number of nodes reachable within k - 1 steps in graph2
    let maxReachableInGraph2 = 0;
    if (k > 0) {
        for (let i = 0; i < m; i++) {
            maxReachableInGraph2 = Math.max(maxReachableInGraph2, dfs(graph2, i, -1, k - 1));
        }
    }

    // For each node in graph1, compute the total reachable nodes
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        const reachableInGraph1 = dfs(graph1, i, -1, k);
        result.push(reachableInGraph1 + maxReachableInGraph2);
    }

    return result;
}
