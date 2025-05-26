function differenceOfSums(n: number, m: number): number {
    const total_sum = (n * (n + 1)) / 2;
    const pairs = Math.floor(n / m);
    const divisble_sum = m * (pairs * (pairs + 1)) / 2;
    const non_divisble_sum = total_sum - divisble_sum;
    return non_divisble_sum - divisble_sum;
};