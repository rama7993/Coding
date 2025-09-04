function maxTaxiEarnings(n: number, rides: number[][]): number {
    rides.sort((a, b) => a[0] - b[0]);
    const starts = rides.map(r => r[0]);
    const memo = new Map<number, number>();

    const earnings = (i) => {
        if (i >= rides.length) return 0;
        if (memo.has(i)) return memo.get(i);
        const [start, end, tip] = rides[i];
        const next = binarySearch(starts, end); //start>=end

        const take = (end - start + tip) + earnings(next);
        const skip = earnings(i + 1);

        const res = Math.max(skip, take);
        memo.set(i, res)
        return res;
    }

    return earnings(0);
};


function binarySearch(arr, target) {
    const n = arr.length;
    let low = 0, high = n;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
