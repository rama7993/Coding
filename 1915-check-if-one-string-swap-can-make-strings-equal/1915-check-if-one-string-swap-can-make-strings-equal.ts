function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true;
    const freq1 = Array(26).fill(0), freq2 = Array(26).fill(0);
    let diff = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diff++;
        if (diff > 2) return false;
        freq1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    return freq1.every((val, idx) => val === freq2[idx]); // freq1==freq2
}; 