function partitionLabels(s: string): number[] {
    const n = s.length;
    const mp = new Map<string, number>();
    for (let i = 0; i < n; i++) {
        mp.set(s[i], i);
    }

    let res = [], start = 0, end = 0;

    for (let i = 0; i < n; i++) {
        end = Math.max(end, mp.get(s[i]));
        if (i === end) {
            res.push(end - start + 1);
            start = i + 1;
        }
    }

    return res;
};