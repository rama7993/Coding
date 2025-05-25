function longestPalindrome(words: string[]): number {
    const freq = new Map<string, number>();

    for (const word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    let result = 0;
    let hasMiddle = false;

    for (const [word, count] of freq.entries()) {
        const reversed = word[1] + word[0];

        if (word === reversed) {
            // Palindromic word like 'aa', 'bb'
            const pairs = Math.floor(count / 2);
            result += pairs * 4;
            if (count % 2 === 1) {
                hasMiddle = true; // one can go in the center
            }
        } else if (freq.has(reversed)) {
            // Palindromic word like 'ab', 'ba'
            const pairCount = Math.min(count, freq.get(reversed)!);// we can only make min('ab' count, 'ba' count)
            result += pairCount * 4;
            // Set both to 0 so we don’t count reverse again
            freq.set(word, 0);
            freq.set(reversed, 0);
        }
    }

    if (hasMiddle) result += 2; // center word

    return result;
}
