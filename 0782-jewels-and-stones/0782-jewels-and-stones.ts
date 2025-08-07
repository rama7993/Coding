function numJewelsInStones(jewels: string, stones: string): number {
    let cnt = 0;
    const mp = new Map<string, number>();

    for (const ch of jewels) {
        mp.set(ch, (mp.get(ch) || 0) + 1);
    }

    for (const s of stones) {
        if (mp.has(s)) cnt++;
    }

    return cnt;
};