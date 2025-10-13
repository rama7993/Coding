function removeAnagrams(words: string[]): string[] {
    const n = words.length;
    const res: string[] = [words[0]];

    for (let i = 1; i < n; i++) {
        if (!isAnagram(words[i], words[i - 1])) {
            res.push(words[i]);
        }
    }

    return res;
}

function isAnagram(a: string, b: string): boolean {
    if (a.length !== b.length) return false;

    const arr = Array(26).fill(0);

    for (let i = 0; i < a.length; i++) {
        const idx1 = a[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const idx2 = b[i].charCodeAt(0) - 'a'.charCodeAt(0);
        arr[idx1]++; arr[idx2]--;
    }

    return arr.every((num) => num === 0);
}