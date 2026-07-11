function topKFrequent(words: string[], k: number): string[] {
    const mp = new Map();

    for (let strg of words) {
        mp.set(strg, (mp.get(strg) || 0) + 1);
    }

    const sorted = Array.from(mp).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });

    return sorted.map(word => word[0]).slice(0, k);
};