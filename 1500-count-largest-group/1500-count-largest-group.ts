function countLargestGroup(n: number): number {
    const mp = new Map<number, number[]>();

    const getSum = (num: number): number => {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    }

    for (let i = 1; i <= n; i++) {
        const key = getSum(i);
        if (mp.has(key)) {
            mp.get(key).push(i);
        } else {
            mp.set(key, [i]);
        }
    }

    let cnt = 0, max = 0;
    //console.log(Math.max((...mp.values()).length));
    for (let val of mp.values()) {
        if (max < val.length) {
            max = val.length;
        }
    }

    for (let val of mp.values()) {
        if (max === val.length) {
            cnt++;
        }
    }

    return cnt;
};