function findEvenNumbers(digits: number[]): number[] {
    const result = new Set<number>();
    const n = digits.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (i === j || j === k || i === k) continue;

                const a = digits[i];
                const b = digits[j];
                const c = digits[k];

                if (a === 0 || (c & 1)) continue;
                const number = a * 100 + b * 10 + c;
                result.add(number);
            }
        }
    }

    return Array.from(result).sort((a, b) => a - b);
};