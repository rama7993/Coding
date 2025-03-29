function maximumScore(nums: number[], k: number): number {
    const MOD = 1_000_000_007;

    function primeScore(x: number): number {
        let score = 0, num = x;
        for (let factor = 2; factor * factor <= num; factor++) {
            if (num % factor === 0) {
                score++;
                while (num % factor === 0) num /= factor;
            }
        }
        if (num > 1) score++;
        return score;
    }

    const n = nums.length;
    const primeScores = nums.map(primeScore);

    const nextDominant = Array(n).fill(n);
    const prevDominant = Array(n).fill(-1);
    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && primeScores[stack[stack.length - 1]] < primeScores[i]) {
            nextDominant[stack.pop()!] = i;
        }
        if (stack.length) prevDominant[i] = stack[stack.length - 1];
        stack.push(i);
    }

    const subarrayCount = nums.map((_, i) => BigInt(nextDominant[i] - i) * BigInt(i - prevDominant[i]));
    const sortedIndices = nums.map((_, i) => i).sort((a, b) => nums[b] - nums[a] || a - b);

    let score = BigInt(1);
    let operationsLeft = BigInt(k);


    function power(base: bigint, exp: bigint): bigint {
        let res = BigInt(1);
        while (exp > 0) {
            if (exp % BigInt(2) === BigInt(1)) res = (res * base) % BigInt(MOD);
            base = (base * base) % BigInt(MOD);
            exp /= BigInt(2);
        }
        return res;
    }

    for (const i of sortedIndices) {
        if (operationsLeft <= BigInt(0)) break;
        const ops = operationsLeft < subarrayCount[i] ? operationsLeft : subarrayCount[i];
        score = (score * power(BigInt(nums[i]), ops)) % BigInt(MOD);
        operationsLeft -= ops;
    }

    return Number(score);
}
