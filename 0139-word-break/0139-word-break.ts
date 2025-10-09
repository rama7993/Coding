function wordBreak(s: string, wordDict: string[]): boolean {
    const dict = new Set(wordDict);
    const n = s.length;
    const memo = {};

    const backtrack = (start) => {
        if (start === n) return true;
        if (start in memo) return memo[start];

        for (let end = start + 1; end <= n; end++) {
            const word = s.slice(start, end);
            if (dict.has(word) && backtrack(end)) {
                memo[start] = true;
                return true;
            }
        }

        memo[start] = false;
        return false;
    }

    return backtrack(0); //every possible split at each idx;
};