function findWords(words: string[]): string[] {
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    return words.filter((word) => {
        const lower = word.toLowerCase();
        const idx = rows.findIndex(r => r.includes(lower[0]));
        return [...lower].every(ch => rows[idx].includes(ch));
    })
};