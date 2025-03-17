function divideArray(nums: number[]): boolean {
    const mp = new Map<number, number>();

    for (let num of nums) {
        mp.set(num, (mp.get(num) || 0) + 1);
    }

    return [...mp.values()].every((num) => num % 2 === 0);
};