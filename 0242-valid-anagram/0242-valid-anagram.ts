function isAnagram(s: string, t: string): boolean {
    const freq = Array(26).fill(0);
    for (let char of s) {
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[idx]++;
    }

    for (let char of t) {
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freq[idx]--;
    }

    return freq.every((num) => num === 0);
};