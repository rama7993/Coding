function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    const n = edges.length;

    function getDistances(start: number): number[] {
        const dist = new Array(n).fill(-1);
        let curr = start, d = 0;

        while (curr !== -1 && dist[curr] === -1) {
            dist[curr] = d;
            d++;
            curr = edges[curr];
        }

        return dist;
    }

    const dist1 = getDistances(node1);
    const dist2 = getDistances(node2);

    let minDistance = Infinity;
    let result = -1;

    for (let i = 0; i < n; i++) {
        if (dist1[i] !== -1 && dist2[i] !== -1) {
            const maxDist = Math.max(dist1[i], dist2[i]);
            if (maxDist < minDistance) {
                minDistance = maxDist;
                result = i;
            }
        }
    }

    return result;
}
