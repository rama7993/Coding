function sumZero(n: number): number[] {
    const res = Array.from({ length: n - 1 }, (_, i) => i + 1);
    const sum = res.reduce((a, b) => a + b, 0);
    res.push(-sum);
    return res;
};