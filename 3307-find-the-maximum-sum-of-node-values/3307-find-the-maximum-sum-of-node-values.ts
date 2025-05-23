function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
    let sum = 0n;
    const res: bigint[] = [];

    for (let num of nums) {
        const bigNum = BigInt(num);
        const flipped = BigInt(num ^ k);
        sum += bigNum;
        res.push(flipped - bigNum);
    }

    res.sort((a, b) => (a > b ? -1 : 1));

    for (let i = 0; i + 1 < res.length; i += 2) {
        if (res[i] + res[i + 1] <= 0n) break;
        sum += res[i] + res[i + 1];
    }

    return Number(sum);
}
