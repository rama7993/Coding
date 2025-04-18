function countAndSay(n: number): string {
    if (n === 1) return '1';

    const RLE = countAndSay(n - 1);
    let res = '';

    for (let i = 0; i < RLE.length;) {
        let cnt = 1;
        while (i + 1 < RLE.length && RLE[i] === RLE[i + 1]) {
            cnt++;
            i++;
        }

        res += `${cnt}${RLE[i]}`;
        i++;
    }

    return res;
}
