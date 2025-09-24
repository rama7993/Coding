function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) return "0";
    let res = "";
    if (Math.sign(numerator) * Math.sign(denominator) < 0) {
        res += "-";
    }
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    res += Math.floor(num / den).toString();
    let rem = num % den; //remainder

    if (rem === 0) return res;
    res += ".";

    const mp = new Map<number, number>(); //track first occurrence 

    while (rem) {
        if (mp.has(rem)) {
            const idx = mp.get(rem);
            res = res.slice(0, idx) + '(' + res.slice(idx) + ')';
            break;
        }
        mp.set(rem, res.length);
        rem = rem * 10;
        res += Math.floor(rem / den).toString();
        rem %= den;
    }

    return res;
};