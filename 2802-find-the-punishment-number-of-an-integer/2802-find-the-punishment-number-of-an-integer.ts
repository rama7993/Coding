function punishmentNumber(n: number): number {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        const product = i * i;
        const squareStr = product.toString();
        if (canPartition(squareStr, 0, i, 0)) {
            res += product;
        }
    }

    return res;
}


function canPartition(str: string, index: number, target: number, currentSum: number): boolean {
    if (index === str.length) {
        return currentSum === target;
    }

    let num = 0;
    for (let j = index; j < str.length; j++) {
        num = num * 10 + Number(str[j]);

        if (currentSum + num > target) break;

        if (canPartition(str, j + 1, target, currentSum + num)) {
            return true; // Found a valid partition
        }
    }

    return false;
}
