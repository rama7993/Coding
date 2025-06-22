function divideString(s: string, k: number, fill: string): string[] {
    const n = s.length;
    let res = [], filler = [];

    if (n % k !== 0) {
        const appendSize = k - (n % k);
        filler = Array(appendSize).fill(fill);
    }

    for (let i = 0; i < n; i += k) {
        const group = s.slice(i, i + k);
        res.push(group);
    }

    if (filler.length) {
        res[res.length - 1] += filler.join('');
    }

    return res;
};