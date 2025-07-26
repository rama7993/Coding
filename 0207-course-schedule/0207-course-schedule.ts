function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adj = Array.from({ length: numCourses }, () => []);
    for (const [u, v] of prerequisites) {
        adj[u].push(v);
    }
    const indegree = Array(numCourses).fill(0);
    for (let u = 0; u < numCourses; u++) {
        for (let v of adj[u]) {
            indegree[v]++;
        }
    }

    const q = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) q.push(i);
    }
    let cnt = 0;
    while (q.length > 0) {
        const node = q.shift();
        cnt++;
        for (let v of adj[node]) {
            indegree[v]--;
            if (indegree[v] === 0) q.push(v);
        }
    }

    return cnt === numCourses;
};