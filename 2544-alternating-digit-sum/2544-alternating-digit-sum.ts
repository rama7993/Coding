function alternateDigitSum(n: number): number {
    let cnt = 0, sum = 0, sign = 1;

    while (n) {
        const digit = n % 10;
        n = Math.trunc(n / 10);
        cnt++;
        sum += sign * digit;
        sign *= -1;
    }

    return cnt & 1 ? sum : -sum;
};