/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const pq = new MaxPriorityQueue();

    for (const stone of stones) {
        pq.enqueue(stone);
    }

    while (pq.size() > 1) {
        const s1 = pq.dequeue();
        const s2 = pq.dequeue();
        if (s1 !== s2) {
            pq.enqueue(s1 - s2);
        }
    }

    return pq.size() === 0 ? 0 : pq.front();
};