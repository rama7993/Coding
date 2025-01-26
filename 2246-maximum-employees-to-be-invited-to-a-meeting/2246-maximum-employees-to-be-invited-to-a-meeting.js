/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
    const n = favorite.length;
    const inDegree = Array(n).fill(0);
    const chain = Array(n).fill(0);    // chain lengths
    const visited = Array(n).fill(false);

    for (const person of favorite) {
        inDegree[person]++;
    }

    // Topological sort to calculate chain lengths
    const queue = [];
    inDegree.forEach((num, idx) => {
        if (num === 0) queue.push(idx);
    });

    while (queue.length > 0) {
        const node = queue.shift();
        visited[node] = true;
        const adj = favorite[node];
        inDegree[adj]--;
        if (inDegree[adj] === 0) queue.push(adj);
        chain[adj] = chain[node] + 1;
    }

    // Calculate cycles and total chain contributions
    let maxCycle = 0;
    let totalChains = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            // Find the cycle
            let current = i;
            let cycleLength = 0;

            while (!visited[current]) {
                visited[current] = true;
                current = favorite[current];
                cycleLength++;
            }
            //console.log(cycleLength);
            // Handle cycles
            if (cycleLength === 2) {
                // Special case for cycles of length 2
                totalChains += 2 + chain[i] + chain[favorite[i]];
            } else {
                maxCycle = Math.max(maxCycle, cycleLength);
            }
        }
    }

    return Math.max(maxCycle, totalChains);
};


//Test cases: [1, 2, 0, 5, 6, 4, 3, 8, 7], [1, 2, 0, 4, 5, 3, 7, 8, 6, 10, 9]