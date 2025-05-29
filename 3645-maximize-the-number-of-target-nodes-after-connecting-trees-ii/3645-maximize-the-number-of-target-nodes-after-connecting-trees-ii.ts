function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
    const buildGraph = (edges: number[][], n: number): number[][] => {
        const graph = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            graph[u].push(v);
            graph[v].push(u);
        }
        return graph;
    };

    const bfsColoring = (graph: number[][]): { colors: number[]; count: number[] } => {
        const n = graph.length;
        const colors = Array(n).fill(-1);
        const count = [0, 0];
        const queue: number[] = [0];
        colors[0] = 0;
        count[0] = 1;

        while (queue.length) {
            const u = queue.shift()!;
            for (const v of graph[u]) {
                if (colors[v] === -1) {
                    colors[v] = 1 - colors[u];
                    count[colors[v]]++;
                    queue.push(v);
                }
            }
        }
        return { colors, count };
    };

    const n1 = edges1.length + 1;
    const n2 = edges2.length + 1;

    const graph1 = buildGraph(edges1, n1);
    const graph2 = buildGraph(edges2, n2);

    const { colors: colors1, count: count1 } = bfsColoring(graph1);
    const { count: count2 } = bfsColoring(graph2);

    const maxCount2 = Math.max(count2[0], count2[1]);

    const result: number[] = [];
    for (let i = 0; i < n1; i++) {
        result.push(count1[colors1[i]] + maxCount2);
    }

    return result;
}
