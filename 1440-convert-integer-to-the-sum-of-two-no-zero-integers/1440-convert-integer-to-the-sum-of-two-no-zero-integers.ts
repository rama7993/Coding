function getNoZeroIntegers(n: number): number[] {

    const noZero = (num) => {
        return !num.toString().includes('0');
    }

    for (let i = 1; i < n; i++) {
        const j = n - i;
        if (noZero(i) && noZero(j)) {
            return [i, j];
        }
    }
};