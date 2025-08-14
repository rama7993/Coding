function largestGoodInteger(num: string): string {
    const n = num.length;
    let res = -1;
    for (let i = 0; i <= n - 3; i++) {
        if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
            res = Math.max(res, +num[i]);
        }
    }

    return res === -1 ? '' : res.toString().repeat(3);
};