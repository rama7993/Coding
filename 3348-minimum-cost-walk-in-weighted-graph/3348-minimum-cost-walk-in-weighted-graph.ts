function minimumCost(n: number, edges: number[][], query: number[][]): number[] {
    let parent: number[] = Array.from({ length: n }, (_, i) => i);
    let minPathCost: number[] = new Array(n).fill(-1);
    let rank: number[] = new Array(n).fill(1); // Rank for Union by Rank

    const findRoot = (node: number): number => {
        if (parent[node] !== node) {
            parent[node] = findRoot(parent[node]); // Path compression
        }
        return parent[node];
    };

    const union = (a: number, b: number, weight: number) => {
        let rootA = findRoot(a);
        let rootB = findRoot(b);

        if (rootA !== rootB) {
            if (rank[rootA] > rank[rootB]) {
                parent[rootB] = rootA;
                minPathCost[rootA] &= (minPathCost[rootB] === -1 ? weight : minPathCost[rootB]);
            } else if (rank[rootA] < rank[rootB]) {
                parent[rootA] = rootB;
                minPathCost[rootB] &= (minPathCost[rootA] === -1 ? weight : minPathCost[rootA]);
            } else {
                parent[rootB] = rootA;
                rank[rootA]++;
                minPathCost[rootA] &= (minPathCost[rootB] === -1 ? weight : minPathCost[rootB]);
            }
        }
        // Set weight for first-time connections
        minPathCost[rootA] = minPathCost[rootA] === -1 ? weight : minPathCost[rootA] & weight;
        minPathCost[rootB] = minPathCost[rootB] === -1 ? weight : minPathCost[rootB] & weight;
    };

    for (let [u, v, w] of edges) {
        union(u, v, w);
    }

    return query.map(([start, end]) => {
        if (start === end) return 0;
        if (findRoot(start) !== findRoot(end)) return -1;
        return minPathCost[findRoot(start)];
    });
}
