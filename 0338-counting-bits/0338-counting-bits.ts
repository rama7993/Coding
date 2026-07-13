function countBits(n: number): number[] {
    let res = Array(n + 1).fill(0);

    for (let i = 0; i < n + 1; i++) {
        let n = i;
        while (n) {
            res[i]++
            n &= n - 1;
        }
    }

    return res;
};