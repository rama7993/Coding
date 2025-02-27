function lenLongestFibSubseq(arr: number[]): number {
    const set = new Set(arr);
    const n = arr.length;
    let maxLength = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let fib1 = arr[i], fib2 = arr[j];
            let fibLen = 2;

            while (set.has(fib1 + fib2)) {
                [fib1, fib2] = [fib2, fib1 + fib2];
                fibLen++;
            }

            maxLength = Math.max(maxLength, fibLen);
        }
    }

    return maxLength >= 3 ? maxLength : 0;
}
