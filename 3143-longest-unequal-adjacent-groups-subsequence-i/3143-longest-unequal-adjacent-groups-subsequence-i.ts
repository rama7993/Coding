function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const result: string[] = [];
    let last = -1;
    for (let i = 0; i < words.length; i++) {
        if (groups[i] !== last) {
            result.push(words[i]);
            last = groups[i];
        }
    }
    return result;
};