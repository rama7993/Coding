/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const mp = new Map();

    for (const strg of strs) {
        const freq = new Array(26).fill(0);

        for (let i = 0; i < strg.length; i++) {
            freq[strg.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        const key = freq.join('#');
        //console.log(key);
        if (mp.has(key)) {
            mp.get(key).push(strg);
        } else {
            mp.set(key, [strg])
        }
    }

    return Array.from(mp.values())
};