function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length, set1 = new Set(), set2 = new Set(), res = Array(n);
    for (let idx = 0; idx < n; idx++) {
        set1.add(A[idx]);
        set2.add(B[idx]);
        const count = Array.from(set1).filter((item) => set2.has(item)).length;
        res[idx] = count;
    }
    return res;
};