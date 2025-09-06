/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let beams = 0;
    let prev = 0, curr = 0;

    for (const beam of bank) {
        let curr = 0;

        for (const char of beam) {
            if (char === '1') curr++;
        }

        if (curr > 0) {
            beams += prev * curr;
            prev = curr;
        }
    }

    return beams;
};