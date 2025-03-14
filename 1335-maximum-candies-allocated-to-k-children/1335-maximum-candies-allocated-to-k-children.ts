function maximumCandies(candies: number[], k: number): number {
    if (k === 0) return 0;

    let left = 1, right = Math.max(...candies);
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let count = candies.reduce((acc, c) => acc + Math.floor(c / mid), 0);

        if (count >= k) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};