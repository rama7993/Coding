function characterReplacement(s: string, k: number): number {
    const freq = new Map<string, number>();
    const n = s.length;
    let left = 0, right = 0, maxCnt = 0, res = 0;

    for (let right = 0; right < n; right++) {
        const char = s[right];
        freq.set(char, (freq.get(char) || 0) + 1);
        maxCnt = Math.max(maxCnt, freq.get(char));
        let windowSize = right - left + 1;

        // more than k characters, shrink the window
        if (windowSize - maxCnt > k) {
            const char = s[left];
            freq.set(char, freq.get(char) - 1);
            left++;
            windowSize = right - left + 1;
        }

        res = Math.max(res, windowSize);
    }
    return res;
};