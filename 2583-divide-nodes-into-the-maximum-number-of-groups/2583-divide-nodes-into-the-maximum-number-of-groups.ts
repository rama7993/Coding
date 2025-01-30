function magnificentSets(n: number, edges: number[][]): number {
    const adj: number[][] = Array.from({ length: n + 1 }, () => []);
    //adjacency list 
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const colors = new Array(n + 1).fill(0);
    const components: number[][] = [];

    function bfs(start: number): number[] | null {
        const queue: number[] = [start];
        const component: number[] = [];
        colors[start] = 1;
        let idx = 0;

        while (idx < queue.length) {
            const node = queue[idx++];
            component.push(node);

            for (const neighbor of adj[node]) {
                if (colors[neighbor] === 0) {
                    colors[neighbor] = -colors[node];
                    queue.push(neighbor);
                } else if (colors[neighbor] === colors[node]) {
                    return null; // Graph is not bipartite
                }
            }
        }
        return component;
    }

    // Find connected components and check bipartiteness
    for (let i = 1; i <= n; i++) {
        if (colors[i] === 0) {
            const component = bfs(i);
            if (!component) return -1; // graph is not bipartite
            components.push(component);
        }
    }

    function getMaxGroups(component: number[]): number {
        let maxGroups = 0;

        for (const node of component) {
            const visited = new Map<number, number>();
            const queue: [number, number][] = [[node, 1]];
            visited.set(node, 1);
            let maxDepth = 1;

            while (queue.length) {
                const [cur, depth] = queue.shift()!;
                maxDepth = Math.max(maxDepth, depth);

                for (const neighbor of adj[cur]) {
                    if (!visited.has(neighbor)) {
                        visited.set(neighbor, depth + 1);
                        queue.push([neighbor, depth + 1]);
                    }
                }
            }
            maxGroups = Math.max(maxGroups, maxDepth);
        }

        return maxGroups;
    }

    let totalGroups = 0;
    for (const component of components) {
        totalGroups += getMaxGroups(component);
    }

    return totalGroups;
}