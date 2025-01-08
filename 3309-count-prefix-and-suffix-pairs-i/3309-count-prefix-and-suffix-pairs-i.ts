function countPrefixSuffixPairs(words: string[]): number {
    let count = 0, n = words.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const len = words[i].length;
            const isPrefixAndSuffix = (words[j].substring(0, len) === words[i]) && (words[j].slice(-len) === words[i]);
            if (isPrefixAndSuffix) count++;
        }
    }
    return count;
};