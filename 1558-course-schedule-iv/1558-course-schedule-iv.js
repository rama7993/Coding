/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    const isPrerequisite = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
    console.log(isPrerequisite);

    for (const [u, v] of prerequisites) {
        isPrerequisite[u][v] = true;
    }

    // Floyd-Warshall to compute the transitive closure
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (isPrerequisite[i][k] && isPrerequisite[k][j]) {
                    isPrerequisite[i][j] = true;
                }
            }
        }
    }

    return queries.map(([u, v]) => isPrerequisite[u][v]);
};
