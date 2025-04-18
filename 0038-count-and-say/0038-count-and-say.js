/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let current = "1";
    for (let i = 2; i <= n; i++) {
        let next = "";
        for (let j = 0; j < current.length;) {
            let count = 1;
            while (j + 1 < current.length && current[j] === current[j + 1]) {
                count++;
                j++;
            }

            next += `${count}${current[j]}`;
            j++;
        }

        current = next;
    }

    return current;
};