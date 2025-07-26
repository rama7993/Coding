/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const indegree = Array(numCourses).fill(0);

    for (const [course, preqreq] of prerequisites) {
        adj[preqreq].push(course); //prereq-> course;
        indegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    let completed = 0;
    while (queue.length) {
        const course = queue.shift();
        completed++;
        for (const next of adj[course]) {
            if (--indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return completed === numCourses;
};