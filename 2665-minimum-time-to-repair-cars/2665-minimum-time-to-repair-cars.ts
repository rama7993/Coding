function repairCars(ranks: number[], cars: number): number {
    let l = 1, h = Math.min(...ranks) * cars * cars, res;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (canRepair(mid, ranks, cars)) {
            res = mid;
            h = mid - 1;

        } else {
            l = mid + 1;
        }
    }

    return res;
};


function canRepair(time: number, ranks: number[], cars: number): boolean {
    let count = 0;
    for (let i = 0; i < ranks.length; i++) {
        count += Math.floor(Math.sqrt(time / ranks[i]));
        if (count >= cars) return true;
    }
    return count >= cars;

}