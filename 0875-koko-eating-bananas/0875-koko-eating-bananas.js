/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let low = 1, high = Math.max(...piles);

    const canEat = (k) => {
        const time = piles.reduce(
            (acc, pile) => Math.ceil(pile / k) + acc,
            0);
        return time <= h;
    }

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (canEat(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }

    }

    return high;
};