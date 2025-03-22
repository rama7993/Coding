function countCompleteComponents(n: number, edges: number[][]): number {
    const adj = Array.from({ length: n }, () => []);
    const visited = new Array(n).fill(false);

    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }


    function bfs(i) {
        let queue = [i], nodes = [i];
        visited[i] = true;

        while (queue.length) {
            const node = queue.shift();

            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                    nodes.push(neighbor);
                }
            }

        }
        return nodes;
    }

    function isCompleteComponent(nodes: number[]): boolean {
        let size = nodes.length;
        for (let node of nodes) {
            if (adj[node].length !== size - 1) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let component = bfs(i);
            if (isCompleteComponent(component)) {
                count++;
            }
        }
    }
    return count;
};



