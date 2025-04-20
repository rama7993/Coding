function numRabbits(answers: number[]): number {
    const freq = new Map<number, number>();
    for (const ans of answers) {
        freq.set(ans, (freq.get(ans) || 0) + 1);
    }

    let total = 0;
    for (const [k, count] of freq.entries()) {
        const groupSize = k + 1;
        const groups = Math.ceil(count / groupSize);
        total += groups * groupSize;
    }
    return total;
}
