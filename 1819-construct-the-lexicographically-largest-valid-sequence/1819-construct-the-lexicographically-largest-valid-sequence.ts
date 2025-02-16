function constructDistancedSequence(n: number): number[] {
    let sequence: number[] = Array(2 * n - 1).fill(0);
    let isUsed: boolean[] = Array(n + 1).fill(false);

    backtrack(sequence, isUsed, n, 0);
    return sequence;
}

function backtrack(
    sequence: number[],
    isUsed: boolean[],
    n: number,
    position: number
): boolean {
    while (position < sequence.length && sequence[position] !== 0) {
        position++;
    }

    if (position === sequence.length) {
        return true;
    }

    for (let num = n; num >= 1; num--) {
        if (isUsed[num]) continue;

        if (num === 1) {
            sequence[position] = 1;
            isUsed[1] = true;
            if (backtrack(sequence, isUsed, n, position + 1)) return true;
            sequence[position] = 0;
            isUsed[1] = false;
        } else if (position + num < sequence.length && sequence[position + num] === 0) {
            sequence[position] = num;
            sequence[position + num] = num;
            isUsed[num] = true;
            if (backtrack(sequence, isUsed, n, position + 1)) return true;
            sequence[position] = 0;
            sequence[position + num] = 0;
            isUsed[num] = false;
        }
    }
    return false;
}
