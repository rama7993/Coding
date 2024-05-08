function reverse(x: number): number {
    let res = 0;
    let sign = x > 0 ? 1 : -1;
    x = Math.abs(x);
    while (x) {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    const maxInt = 2 ** 31 - 1;
    const minInt = -1 * 2 ** 31;
    if (res > maxInt || res < minInt) {
        return 0;
    }
    return res * sign;
}
