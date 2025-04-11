function countSymmetricIntegers(low: number, high: number): number {
    let cnt = 0;
    for (let i = low; i <= high; i++) {
        const strg = i.toString();
        if (strg.length % 2) continue;
        const sum = strg.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        let half_sum = 0;
        for (let i = 0; i < strg.length / 2; i++) {
            half_sum += parseInt(strg[i]);
        }
        if (2 * half_sum === sum) cnt++;
    }

    return cnt;
};