function canConstruct(ransomNote: string, magazine: string): boolean {
    const freq = Array(26).fill(0);
    const m = ransomNote.length, n = magazine.length;

    for (let i = 0; i < m; i++) {
        const idx = ransomNote.charCodeAt(i) - 'a'.charCodeAt(0);
        freq[idx]++;
    }

    for (let i = 0; i < n; i++) {
        const idx = magazine.charCodeAt(i) - 'a'.charCodeAt(0);
        freq[idx]--;
    }

    return freq.every((val) => val <= 0);
};