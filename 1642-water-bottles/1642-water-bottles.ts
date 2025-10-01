function numWaterBottles(numBottles: number, numExchange: number): number {
    let res = numBottles;
    let total = numBottles;

    while (total >= numExchange) {
        const bottles = Math.floor(total / numExchange);
        res += bottles;
        total = bottles + (total % numExchange);
    }

    return res;
};