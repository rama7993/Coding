function minMaxDifference(num: number): number {
    const s = num.toString();
    const min = Number(s.replaceAll(s[0], '0'));
    const maxDigit = s.split('').find(d => d !== '9');
    const max = maxDigit ? Number(s.replaceAll(maxDigit, '9')) : num;
    return max - min;
};