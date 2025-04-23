function countLargestGroup(n: number): number {
    const countMap = new Map<number, number>();

    const getDigitSum = (num: number): number => {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    for (let i = 1; i <= n; i++) {
        const sum = getDigitSum(i);
        countMap.set(sum, (countMap.get(sum) || 0) + 1);
    }

    const maxCount = Math.max(...countMap.values());
    let result = 0;

    for (const count of countMap.values()) {
        if (count === maxCount) {
            result++;
        }
    }

    return result;
}
