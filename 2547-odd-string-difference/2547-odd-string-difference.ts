function oddString(words: string[]): string {
    const n = words.length;
    const mp = new Map<string, [number, string]>();

    for (let k = 0; k < n; k++) {
        const word = words[k];
        const m = word.length;
        const arr = new Array(m - 1);
        for (let i = 1; i < m; i++) {
            arr[i - 1] = word.charCodeAt(i) - word.charCodeAt(i - 1);
        }
        const key = JSON.stringify(arr);
        if (mp.has(key)) {
            const [cnt, val] = mp.get(key);
            mp.set(key, [cnt + 1, val]);
        } else {
            mp.set(key, [1, word]);
        }
    }

    for (const [key, [cnt, word]] of mp.entries()) {
        if (cnt === 1) return word;
    }
};