function carPooling(trips: number[][], capacity: number): boolean {
    const stops = Array(1001).fill(0);

    for (const trip of trips) {
        let [passengers, from, to] = trip;
        stops[from] += passengers;
        stops[to] -= passengers;
    }

    let usedCapacity = 0;
    for (let i = 0; i < 1001; i++) {
        usedCapacity += stops[i];
        if (usedCapacity > capacity) {
            return false;
        }
    }
    return true;
};