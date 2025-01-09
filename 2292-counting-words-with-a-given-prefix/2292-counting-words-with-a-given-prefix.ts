function prefixCount(words: string[], pref: string): number {
    let count = 0;
    const len = pref.length;
    for (let word of words) {
        if (word.slice(0, len) === pref) count++;
    }

    return count;
};