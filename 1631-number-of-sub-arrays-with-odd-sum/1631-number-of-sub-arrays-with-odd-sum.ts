function numOfSubarrays(arr: number[]): number {
    const mod = 1e9 + 7;
    let oddCount = 0, evenCount = 1;
    let prefixSum = 0, res = 0;

    for (let num of arr) {
        prefixSum += num;

        if (prefixSum % 2 === 0) {
            res = (res + oddCount) % mod;
            evenCount++;
        } else {
            res = (res + evenCount) % mod;
            oddCount++;
        }
    }

    return res;
};
