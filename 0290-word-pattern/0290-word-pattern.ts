function wordPattern(pattern: string, s: string): boolean {
    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();
    const words: string[] = s.split(' ');

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i], w = words[i];

        if (charToWord.has(p) && charToWord.get(p) !== w) return false;
        if (wordToChar.has(w) && wordToChar.get(w) !== p) return false;

        charToWord.set(p, w);
        wordToChar.set(w, p);
    }
    return true;
}
