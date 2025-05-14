function lengthAfterTransformations(s: string, t: number, nums: number[]): number {
    const mod = 1000000007n; //BigInt
    const size = 26;

    // Build transformation matrix
    const buildMatrix = (): bigint[][] => {
        const mat: bigint[][] = Array.from({ length: size }, () => new Array(size).fill(0n));
        for (let i = 0; i < size; i++) {
            for (let j = 1; j <= nums[i]; j++) {
                const target = (i + j) % size;
                mat[target][i] = (mat[target][i] + 1n) % mod;
            }
        }
        return mat;
    };

    // Multiply two matrices
    const multiply = (a: bigint[][], b: bigint[][]): bigint[][] => {
        const result: bigint[][] = Array.from({ length: size }, () => new Array(size).fill(0n));
        for (let i = 0; i < size; i++) {
            for (let k = 0; k < size; k++) {
                if (a[i][k] === 0n) continue;
                for (let j = 0; j < size; j++) {
                    result[i][j] = (result[i][j] + a[i][k] * b[k][j]) % mod;
                }
            }
        }
        return result;
    };

    // Matrix exponentiation
    const matrixPower = (mat: bigint[][], power: bigint): bigint[][] => {
        let result: bigint[][] = Array.from({ length: size }, (_, i) =>
            Array.from({ length: size }, (_, j) => (i === j ? 1n : 0n))
        );

        while (power > 0n) {
            if (power % 2n === 1n) {
                result = multiply(mat, result);
            }
            mat = multiply(mat, mat);
            power = power / 2n;
        }

        return result;
    };

    // Multiply matrix with frequency vector
    const applyMatrix = (mat: bigint[][], vec: bigint[]): bigint[] => {
        const result: bigint[] = new Array(size).fill(0n);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                result[i] = (result[i] + mat[i][j] * vec[j]) % mod;
            }
        }
        return result;
    };

    // Initial frequency vector
    const freq: bigint[] = new Array(size).fill(0n);
    for (const char of s) {
        freq[char.charCodeAt(0) - 97]++;
    }
    const freqBig = freq.map(n => BigInt(n));
    const transMatrix = buildMatrix();
    const poweredMatrix = matrixPower(transMatrix, BigInt(t));
    const finalFreq = applyMatrix(poweredMatrix, freqBig);

    const total = finalFreq.reduce((sum, val) => (sum + val) % mod, 0n);
    return Number(total);
}
