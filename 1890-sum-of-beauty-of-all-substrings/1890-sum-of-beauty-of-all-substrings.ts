function beautySum(s: string): number {
    const n = s.length;
    let beauty = 0;

    for (let i = 0; i < n; i++) {
        const mp = new Map<string, number>();
        for (let j = i; j < n; j++) {
            const ch = s[j];
            mp.set(ch, (mp.get(ch) || 0) + 1);

            const freq = [...mp.values()]
            const maxFreq = Math.max(...freq);
            const minFreq = Math.min(...freq);
            beauty += maxFreq - minFreq;
        }
    }

    return beauty;
};