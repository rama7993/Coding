function plusOne(digits: number[]): number[] {
    const n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    const res = Array(n + 1).fill(0);
    res[0] = 1;
    return res;
};