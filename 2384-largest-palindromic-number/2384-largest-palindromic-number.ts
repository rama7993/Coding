function largestPalindromic(num: string): string {
    const freq = new Map<string, number>();
    const n = num.length;

    for (const digit of num) {
        freq.set(digit, (freq.get(digit) || 0) + 1);
    }

    let left = '', middle = '';

    for (let d = 9; d >= 0; d--) {
        const cnt = freq.get(String(d));

        if (cnt % 2 === 1 && middle === '') {
            middle = String(d);
        }

        left += String(d).repeat(Math.floor(cnt / 2));
    }

    left = left.replace(/^0+/g, '');
    if (left === "" && middle === "") { // all zeroes
        return "0";
    }
    const right = left.split('').reverse().join('');
    return left + middle + right;
};