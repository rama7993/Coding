function countGoodNumbers(n: number): number {
    const mod = 10n ** 9n + 7n;

    function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
        let result = 1n;
        base %= mod;
        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % mod;
            }
            base = (base * base) % mod;
            exp /= 2n;
        }
        return result;
    }

    const even = BigInt(Math.floor((n + 1) / 2));
    const odd = BigInt(Math.floor(n / 2));

    const evenWays = modPow(5n, even, mod); // (5^even) % mod
    const oddWays = modPow(4n, odd, mod);   // (4^odd) % mod

    return Number((evenWays * oddWays) % mod);
}
