function lengthAfterTransformations(s: string, t: number): number {
    const mod = 1e9 + 7;
    const freq = new Array(26).fill(0);

    for (const char of s) {
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let step = 0; step < t; step++) {
        const newFreq = new Array(26).fill(0);

        for (let i = 0; i < 26; i++) {
            const count = freq[i];
            if (i === 25) {
                // 'z' → 'a' + 'b'
                newFreq[0] = (newFreq[0] + count) % mod;
                newFreq[1] = (newFreq[1] + count) % mod;
            } else {
                // 'a' → 'b', 'b' → 'c', ..., 'y' → 'z'
                newFreq[i + 1] = (newFreq[i + 1] + count) % mod;
            }
        }

        for (let i = 0; i < 26; i++) {
            freq[i] = newFreq[i];
        }
    }

    return freq.reduce((sum, count) => (sum + count) % mod, 0);
}
