function canBeTypedWords(text: string, brokenLetters: string): number {
    const set = new Set(brokenLetters.split(''));
    let cnt = 0;

    for (const word of text.trim().split(/\s+/)) {
        let hasChar = false;
        for (let i = 0; i < word.length; i++) {
            if (set.has(word[i])) {
                hasChar = true;
                break;
            }
        }
        cnt += hasChar ? 0 : 1;
    }

    return cnt;
};