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
        pq.enqueue(s1 - s2);
    }

    return pq.front();
};