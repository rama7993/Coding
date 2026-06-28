function checkInclusion(s1: string, s2: string): boolean {
    const m = s1.length, n = s2.length;
    if (m > n) return false;
    const freq1 = Array(26).fill(0);
    const freq2 = Array(26).fill(0);

    for (const ch of s1) {
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        freq1[idx]++;
    }

    for (let i = 0; i < n; i++) {
        let idx = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        freq2[idx]++;

        if (i >= m) { //shrink window
            let idx = s2[i - m].charCodeAt(0) - 'a'.charCodeAt(0);
            freq2[idx]--;
        }

        if (JSON.stringify(freq1) === JSON.stringify(freq2)) return true;
    }
    return false;
};