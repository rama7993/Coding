function maxRemoval(nums: number[], queries: number[][]): number {
    queries.sort(([startA], [startB]) => startA - startB);

    const n = nums.length;
    const diff = new Array(n + 2).fill(0);
    const maxHeap = new PriorityQueue<number>((a, b) => b - a); // Max-heap on end index

    let j = 0;
    let used = 0;

    for (let i = 0; i < n; i++) {
        used += diff[i];
        // Push all queries that start at or before index i
        while (j < queries.length && queries[j][0] <= i) {
            maxHeap.enqueue(queries[j++][1]);
        }

        // If current number already reducible to 0, skip
        if (used >= nums[i]) continue;

        // Use available queries (longest ones first) to reach 0
        while (used < nums[i] && !maxHeap.isEmpty() && maxHeap.front() >= i) {
            used++;
            diff[maxHeap.dequeue() + 1]--; // End effect after query's right index
        }

        if (used < nums[i]) return -1; // Impossible to zero out nums[i]
    }


    return maxHeap.size(); //unused
}
