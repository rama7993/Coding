function minSpeedOnTime(dist: number[], hour: number): number {
    const n = dist.length;
    if (hour <= dist.length - 1) return -1; //minimum time to travel

    let low = 1, high = 1e7;

    const canTravel = (speed) => {
        let time = 0;
        for (let i = 0; i < n - 1; i++) {
            time += Math.ceil(dist[i] / speed);
        }
        time += dist[n - 1] / speed;
        return time <= hour;
    }

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (canTravel(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }

    }

    return high;
};