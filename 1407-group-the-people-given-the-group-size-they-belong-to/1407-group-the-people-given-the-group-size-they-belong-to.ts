function groupThePeople(groupSizes: number[]): number[][] {
    const n = groupSizes.length;
    const mp = new Map<number, number[]>();

    for (let i = 0; i < n; i++) {
        const key = groupSizes[i];
        if (mp.has(key)) {
            mp.get(key).push(i);
        } else {
            mp.set(key, [i])
        }
    }
    let res = [];
    for (let [key, arr] of mp.entries()) {
        for (let i = 0; i < arr.length; i += key) {
            res.push(arr.slice(i, i + key));
        }
    }
    return res;

};