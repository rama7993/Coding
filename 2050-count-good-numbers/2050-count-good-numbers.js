/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    const mod = 1000000007n;

    function modPow(base, exp, mod) {
        let result = 1n;
        base %= mod;
        while (exp > 0n) {
            if (exp % 2n === 1n) {
                result = (result * base) % mod;
                exp -= 1n;
            }
            else {
                base = (base * base) % mod;
                exp /= 2n;
            }
        }
        return result;
    }

    const even = BigInt(Math.floor((n + 1) / 2));
    const odd = BigInt(Math.floor(n / 2));

    const evenWays = modPow(5n, even, mod); // (5^even) % mod
    const oddWays = modPow(4n, odd, mod);   // (4^odd) % mod

    return Number((evenWays * oddWays) % mod);
};