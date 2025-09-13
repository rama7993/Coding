function maxFreqSum(s: string): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let cnt1 = 0, cnt2 = 0;
    const freq = new Map<string, number>();

    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
        if (vowels.has(ch)) {
            cnt1 = Math.max(cnt1, freq.get(ch))
        } else {
            cnt2 = Math.max(cnt2, freq.get(ch))
        }
    }

    return cnt1 + cnt2;
};