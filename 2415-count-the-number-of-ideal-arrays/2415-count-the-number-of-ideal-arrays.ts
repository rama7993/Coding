function idealArrays(n: number, maxi: number): number {
    const mod = 10n ** 9n + 7n;
    const m = Math.min(n, 14);

    const dp: bigint[][] = Array.from({ length: maxi + 1 }, () => Array(m + 1).fill(0n));

    // Fill dp array with appropriate values
    for (let i = 1; i <= maxi; i++) {
        dp[i][1] = 1n;
        let j = 2;
        while (i * j <= maxi) {
            for (let k = 1; k < m; k++) {
                dp[i * j][k + 1] += dp[i][k];
            }
            j++;
        }
    }

    // Factorial and inverse factorial arrays
    const fact: bigint[] = Array(n).fill(1n);
    const invfact: bigint[] = Array(n).fill(1n);

    // Calculate factorials using BigInt
    for (let i = 1; i < n; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % mod;
    }

    // Calculate inverse factorials using modular inverse
    invfact[n - 1] = modInverse(fact[n - 1], mod);
    for (let i = n - 1; i > 0; i--) {
        invfact[i - 1] = (invfact[i] * BigInt(i)) % mod;
    }

    let res = 0n;
    const f_n1 = fact[n - 1];

    // Calculate result using dp values and factorials
    for (let i = 1; i <= maxi; i++) {
        for (let k = 1; k <= m; k++) {
            res = (res + dp[i][k] * f_n1 % mod * invfact[k - 1] % mod * invfact[n - k] % mod) % mod;
        }
    }

    return Number(res);
}

// Helper function to calculate modular inverse using Fermat's Little Theorem
function modInverse(a: bigint, mod: bigint): bigint {
    return power(a, mod - 2n, mod);
}

// Helper function to calculate a^b % mod using binary exponentiation
function power(a: bigint, b: bigint, mod: bigint): bigint {
    let res = 1n;
    a %= mod;
    while (b > 0n) {
        if (b % 2n === 1n) {
            res = (res * a) % mod;
        }
        a = (a * a) % mod;
        b /= 2n;
    }
    return res;
}
