function minOperations(nums: number[], k: number): number {
    const pq = new MinPriorityQueue();
    nums.forEach(num => pq.enqueue(num));
    let count = 0;

    while (pq.front().element < k) {
        const x = pq.dequeue().element;
        const y = pq.dequeue().element;
        const newVal = Math.min(x, y) * 2 + Math.max(x, y);
        pq.enqueue(newVal);
        count++;
    }

    return count;
};




