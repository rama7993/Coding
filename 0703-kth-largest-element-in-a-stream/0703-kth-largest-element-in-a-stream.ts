class KthLargest {
    private heap: MinPriorityQueue<number>;
    private k: number;

    constructor(k: number, nums: number[]) {
        this.heap = new MinPriorityQueue<number>();
        this.k = k;

        for (const num of nums) {
            this.heap.push(num);
        }

        while (this.heap.size() > k) {
            this.heap.pop();
        }
    }

    add(val: number): number {
        this.heap.push(val);
        if (this.heap.size() > this.k) {
            this.heap.pop();
        }

        return this.heap.front();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */