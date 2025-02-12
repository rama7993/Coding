function maximumSum(nums: number[]): number {
    const mp = new Map<number, number[]>();
    let res = -1;

    for (let num of nums) {
        const key = num.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
        if (mp.has(key)) {
            mp.get(key).push(num)
        } else {
            mp.set(key, [num]);
        }
    }

    for (let arr of mp.values()) {
        if (arr.length >= 2) {
            const [max1, max2] = arr.sort((a, b) => b - a).slice(0, 2);
            res = Math.max(res, max1 + max2)
        }
    }

    return res;
};