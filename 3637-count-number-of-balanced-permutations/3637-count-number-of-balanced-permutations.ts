function countBalancedPermutations(numberString: string): number {
    const MOD = 1000000007n;
    const MAX = 80;

    const factorials: bigint[] = Array(MAX + 1).fill(1n);
    const invFactorials: bigint[] = Array(MAX + 1).fill(0n);

    for (let i = 1; i <= MAX; i++) {
        factorials[i] = (factorials[i - 1] * BigInt(i)) % MOD;
    }

    const modPow = (base: bigint, exp: bigint): bigint => {
        let result = 1n;
        base %= MOD;
        while (exp > 0n) {
            if (exp & 1n) result = (result * base) % MOD;
            base = (base * base) % MOD;
            exp >>= 1n;
        }
        return result;
    };

    invFactorials[MAX] = modPow(factorials[MAX], MOD - 2n);
    for (let i = MAX; i >= 1; i--) {
        invFactorials[i - 1] = (invFactorials[i] * BigInt(i)) % MOD;
    }

    const n = numberString.length;
    const evenCount = Math.ceil(n / 2);
    const oddCount = n - evenCount;

    const freq: number[] = Array(10).fill(0);
    let sum = 0;
    for (const c of numberString) {
        const d = c.charCodeAt(0) - 48;
        freq[d]++;
        sum += d;
    }

    if (sum % 2 !== 0 || sum / 2 > evenCount * 9) return 0;
    const target = sum / 2;

    let curr = Array.from({ length: evenCount + 1 }, () => Array<bigint>(target + 1).fill(0n));
    let next = Array.from({ length: evenCount + 1 }, () => Array<bigint>(target + 1).fill(0n));
    curr[0][0] = 1n;

    for (let digit = 0; digit <= 9; digit++) {
        const count = freq[digit];
        if (count === 0) continue;

        const binom: bigint[] = Array(count + 1).fill(0n);
        for (let k = 0; k <= count; k++) {
            binom[k] = (factorials[count] * invFactorials[k] % MOD) * invFactorials[count - k] % MOD;
        }

        for (let i = 0; i <= evenCount; i++) next[i].fill(0n);

        for (let i = 0; i <= evenCount; i++) {
            for (let j = 0; j <= target; j++) {
                const ways = curr[i][j];
                if (ways === 0n) continue;

                const maxAdd = Math.min(count, evenCount - i);
                for (let k = 0; k <= maxAdd; k++) {
                    const ni = i + k;
                    const nj = j + k * digit;
                    if (nj > target) break;
                    next[ni][nj] = (next[ni][nj] + ways * binom[k]) % MOD;
                }
            }
        }

        [curr, next] = [next, curr];
    }

    const result = curr[evenCount][target];
    if (result === 0n) return 0;

    let total = (result * factorials[evenCount] % MOD) * factorials[oddCount] % MOD;
    for (let d = 0; d <= 9; d++) {
        total = (total * invFactorials[freq[d]]) % MOD;
    }

    return Number(total);
}
