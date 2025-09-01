function repeatedCharacter(s: string): string {
    const set = new Set<string>();
    const n = s.length;

    for (const char of s) {
        if (set.has(char)) {
            return char;
        } else {
            set.add(char)
        }
    }

    return '';
};