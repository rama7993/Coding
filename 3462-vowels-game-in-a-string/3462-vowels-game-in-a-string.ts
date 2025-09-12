function doesAliceWin(s: string): boolean {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    for (const ch of s) {
        if (set.has(ch)) return true;
    }
    return false;
};