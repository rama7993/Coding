function spellchecker(wordlist: string[], queries: string[]): string[] {
    const wordSet = new Set(wordlist);
    const caseInsensitive = new Map<string, string>();
    const vowelInsensitive = new Map<string, string>();

    for (const word of wordlist) {
        const lower = word.toLowerCase();
        const dev = devowel(word);
        //store first occurrence
        if (!caseInsensitive.has(lower)) caseInsensitive.set(lower, word);
        if (!vowelInsensitive.has(dev)) vowelInsensitive.set(dev, word);
    }

    return queries.map((query) => {
        if (wordSet.has(query)) return query;

        const lower = query.toLowerCase();
        if (caseInsensitive.has(lower)) return caseInsensitive.get(lower);

        const dev = devowel(query);
        if (vowelInsensitive.has(dev)) return vowelInsensitive.get(dev);

        return '';
    })
};


function devowel(word: string): string {
    return word.toLowerCase().replace(/[aeiou]/g, '*');
}