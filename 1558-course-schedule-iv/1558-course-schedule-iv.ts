function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    const adjList = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);
    for (const [u, v] of prerequisites) {
        adjList[u].push(v);
        inDegree[v]++;
    }

    //Topological sorting 
    const q = []//queue;
    const preqArr = Array.from({ length: numCourses }, () => new Set<number>())
    for (let i = 0; i < numCourses; i++) {
        inDegree[i] === 0 && q.push(i);
    }
    while (q.length > 0) {
        const node = q.shift();
        for (const u of adjList[node]) {
            preqArr[u].add(node); // add as prerequisite for all adj nodes;
            for (const preq of preqArr[node]) { // add prequisites of current node as well to adj nodes 
                preqArr[u].add(preq);
            }
            inDegree[u]--;
            inDegree[u] === 0 && q.push(u);
        }
    }

    return queries.map(([u, v]) => preqArr[v].has(u));
};