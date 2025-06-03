function groupAnagrams(strs: string[]): string[][] {
    const mp = new Map<string, string[]>();

    for (const strg of strs) {
        const word: string = strg.split('').sort().join('');

        if (mp.has(word)) {
            mp.get(word).push(strg);
        } else {
            mp.set(word, [strg])
        }
    }

    return [...mp.values()];
};