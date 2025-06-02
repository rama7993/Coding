function myAtoi(s: string): number {
    const min = -(2 ** 31);
    const max = 2 ** 31 - 1;

    const match = s.trim().match(/^[-+]?[0-9]+/);
    if (!match) return 0;
    //console.log(match);
    const num = Number(match[0]) // parseInt(match[0], 10);
    return Math.max(min, Math.min(max, num));
};