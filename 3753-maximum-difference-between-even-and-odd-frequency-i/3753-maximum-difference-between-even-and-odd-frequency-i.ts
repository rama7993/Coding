function maxDifference(s: string): number {
    const freqMap = new Map<string, number>();

    for (const ch of s) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }

    const odds: number[] = [];
    const evens: number[] = [];

    for (const count of freqMap.values()) {
        if (count % 2 === 0) {
            evens.push(count);
        } else {
            odds.push(count);
        }
    }


    let maxDiff = -Infinity;

    for (const odd of odds) {
        for (const even of evens) {
            maxDiff = Math.max(maxDiff, odd - even);
        }
    }

    return maxDiff;
}
