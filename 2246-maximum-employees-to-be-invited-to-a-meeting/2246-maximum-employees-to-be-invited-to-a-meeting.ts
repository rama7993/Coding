function maximumInvitations(favorite: number[]): number {
    const n = favorite.length;
    const inDegree = Array(n).fill(0), chain = Array(n).fill(0);
    //Topological sort
    for (const vertex of favorite) {
        inDegree[vertex]++;
    }
    const q = []//queue;
    const visited = Array(n).fill(false);

    inDegree.forEach((num, idx) => num === 0 && q.push(idx));
    while (q.length > 0) {
        const node = q.shift();
        visited[node] = true;
        const adj = favorite[node];
        inDegree[adj]--;
        inDegree[adj] === 0 && q.push(adj);
        chain[adj] = chain[node] + 1;
    }

    //Max chain length cycle
    let maxCycle = 0, totalChains = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let current = i, cycleLength = 0;
            while (!visited[current]) {
                visited[current] = true;
                current = favorite[current];
                cycleLength++;
            }

            if (cycleLength == 2) {
                totalChains += 2 + chain[i] + chain[favorite[i]];
            } else {
                maxCycle = Math.max(maxCycle, cycleLength);
            }

        }
    }

    return Math.max(maxCycle, totalChains);
};