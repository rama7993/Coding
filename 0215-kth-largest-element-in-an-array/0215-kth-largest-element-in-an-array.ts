function findKthLargest(nums: number[], k: number): number {
    //const pq = new MinPriorityQueue();
    const pq = new MinPriorityQueue<number>();

    for (const num of nums) {
        pq.enqueue(num);

        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    //return (pq.toArray() as number[]).at(0);
    //return pq.front() as number;
    return pq.front();
};