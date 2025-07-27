function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const adj: number[][] = Array.from({ length: numCourses }, () => []);
    const indegree: number[] = Array(numCourses).fill(0);
    const res: number[] = [];

    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course);
        indegree[course]++;
    }
    const queue = [];
    for (let u = 0; u < numCourses; u++) {
        if (indegree[u] === 0) queue.push(u);
    }
    while (queue.length) {
        const node = queue.shift();
        res.push(node);
        for (const v of adj[node]) {
            if (--indegree[v] === 0) {
                queue.push(v)
            }
        }
    }


    return res.length === numCourses ? res : [];
};