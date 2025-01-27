function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
    const adjList: number[][] = Array.from({ length: numCourses }, () => []);
    for (const [u, v] of prerequisites) {
        adjList[u].push(v);
    }

    // Function to perform DFS and mark prerequisites
    const isPrerequisite = (start: number) => {
        const visited = new Set<number>();
        const dfs = (course: number) => {
            if (visited.has(course)) return;
            visited.add(course);
            for (const next of adjList[course]) {
                dfs(next);
            }
        };
        dfs(start);
        visited.delete(start); // Remove the start course itself from the set
        return visited;
    };

    const prerequisitesMap = new Map<number, Set<number>>();
    for (let i = 0; i < numCourses; i++) {
        prerequisitesMap.set(i, isPrerequisite(i));
    }

    return queries.map(([u, v]) => prerequisitesMap.get(u).has(v));
}
