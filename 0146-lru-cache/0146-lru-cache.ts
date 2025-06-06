class LRUCache {
    private capacity: number;
    private mp: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.mp = new Map<number, number>();
    }

    get(key: number): number {
        if (!this.mp.has(key)) return -1;
        const value = this.mp.get(key);
        this.mp.delete(key);
        this.mp.set(key, value);
        return value;
    }

    put(key: number, value: number): void {
        if (this.mp.has(key)) {
            this.mp.delete(key);
        } else if (this.mp.size >= this.capacity) {
            const leastUsed = Array.from(this.mp.keys())[0];
            this.mp.delete(leastUsed)
        }

        this.mp.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */