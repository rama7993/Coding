function countGoodIntegers(n: number, k: number): number {
    const dict = new Set<string>();
    const base = Math.pow(10, Math.floor((n - 1) / 2));
    const skip = n % 2;

    // Generate k-palindromic integers of length n
    for (let i = base; i < base * 10; i++) {
        let s = i.toString();
        s += s.split("").reverse().slice(skip).join("");
        const palindromicInteger = parseInt(s);

        if (palindromicInteger % k === 0) {
            const sorted = s.split("").sort().join("");
            dict.add(sorted);
        }
    }

    // Precompute factorials using BigInt
    const factorial: bigint[] = Array(n + 1).fill(1n);
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i);
    }

    let ans = 0n;

    for (const s of dict) {
        const count: number[] = Array(10).fill(0);
        for (const c of s) {
            count[parseInt(c)]++;
        }

        // Total permutations with leading digit not 0
        let total = BigInt(n - count[0]) * factorial[n - 1];
        for (const x of count) {
            total /= factorial[x];
        }

        ans += total;
    }

    return Number(ans);
}
