class NumberContainers {
    private indexMap: Map<number, number>;  // Stores index -> number mapping
    private numberMap: Map<number, InstanceType<typeof MinPriorityQueue>>; // Stores number -> MinPriorityQueue of indices

    constructor() {
        this.indexMap = new Map();
        this.numberMap = new Map();
    }

    change(index: number, number: number): void {
        if (this.indexMap.has(index)) {
            let oldNumber = this.indexMap.get(index)!;
            if (this.numberMap.has(oldNumber)) {
                this.numberMap.get(oldNumber)!.enqueue(index); // Keep duplicate entries, handle later
            }
        }

        this.indexMap.set(index, number);

        if (!this.numberMap.has(number)) {
            this.numberMap.set(number, new MinPriorityQueue({ priority: (x: number) => x }));
        }
        this.numberMap.get(number)!.enqueue(index);
    }

    find(number: number): number {
        if (!this.numberMap.has(number) || this.numberMap.get(number)!.isEmpty()) {
            return -1;
        }

        let pq = this.numberMap.get(number)!;
        while (!pq.isEmpty() && this.indexMap.get(pq.front().element) !== number) {
            pq.dequeue(); // Remove outdated indices
        }

        return pq.isEmpty() ? -1 : pq.front().element;
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */