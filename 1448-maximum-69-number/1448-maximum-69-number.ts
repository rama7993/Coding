function maximum69Number(num: number): number {
    let n = num;
    let pos = -1, i = 0; //from right

    while (n > 0) {
        const rem = n % 10;
        if (rem === 6) pos = i;
        n = Math.floor(n / 10);
        i++;
    }

    if (pos === -1) return num;
    else {
        return num + 3 * Math.pow(10, pos);
    }
};