function stringMatching(words: string[]): string[] {
    const n = words.length, set = new Set<string>();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            if (words[i].includes(words[j])) {
                set.add(words[j]);
            } else if (words[j].includes(words[i])) {
                set.add(words[i]);
            }
        }
    }
    return Array.from(set);
};