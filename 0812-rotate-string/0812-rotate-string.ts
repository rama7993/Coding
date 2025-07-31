function rotateString(s: string, goal: string): boolean {
    const n = s.length;
    for (let i = 0; i < n; i++) {
        const strg = s.slice((i + 1) % n) + s.slice(0, (i + 1) % n);
        if (strg === goal) return true;
    }
    return false;
};