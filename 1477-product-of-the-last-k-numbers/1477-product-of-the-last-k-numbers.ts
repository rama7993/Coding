class ProductOfNumbers {
    private arr;
    constructor() {
        this.arr = [];
    }

    add(num: number): void {
        this.arr.push(num);
    }

    getProduct(k: number): number {
        if (this.arr.length >= k) {
            return this.arr.slice(-k).reduce((acc, curr) => acc * curr, 1);
        }
        return -1;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */