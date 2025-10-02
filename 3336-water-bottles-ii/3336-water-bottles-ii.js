/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let res = numBottles;
    let bottles = numBottles;

    while (bottles >= numExchange) {
        const exchange = bottles - numExchange;
        numExchange++;
        res += 1;  // Drink the new full bottle
        bottles = exchange + 1;  // Empties + 1 new empty from drinking
    }

    return res;
};