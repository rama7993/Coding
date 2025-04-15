function goodTriplets(nums1: number[], nums2: number[]): number {
    const n = nums1.length;

    // index of each number in nums2
    const pos = new Array(n);
    for (let i = 0; i < n; i++) {
        pos[nums2[i]] = i;
    }

    // Transform nums1 into positions in nums2
    const transformed = nums1.map(x => pos[x]);

    class FenwickTree {
        tree: number[];
        constructor(size: number) {
            this.tree = new Array(size + 1).fill(0);
        }
        update(i: number, delta: number) {
            for (i += 1; i < this.tree.length; i += i & -i) {
                this.tree[i] += delta;
            }
        }
        query(i: number): number {
            let sum = 0;
            for (i += 1; i > 0; i -= i & -i) {
                sum += this.tree[i];
            }
            return sum;
        }
    }

    const leftTree = new FenwickTree(n);
    const leftSmaller = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        leftSmaller[i] = leftTree.query(transformed[i] - 1);
        leftTree.update(transformed[i], 1);
    }

    const rightTree = new FenwickTree(n);
    const rightGreater = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        rightGreater[i] = rightTree.query(n - 1) - rightTree.query(transformed[i]);
        rightTree.update(transformed[i], 1);
    }

    // Final count
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += leftSmaller[i] * rightGreater[i];
    }

    return res;
}
