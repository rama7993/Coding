function sortVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const order = [];
    for (const ch of s) {
        if (vowels.has(ch.toLowerCase())) order.push(ch);
    }
    order.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let res = '', i = 0;
    for (const ch of s) {
        if (vowels.has(ch.toLowerCase())) {
            res += order[i++];
        } else {
            res += ch;
        }
    }
    return res;
};