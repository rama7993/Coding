/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    return words.filter((word) => {
        const lower = word.toLowerCase();
        const row = rows.find(r => r.includes(lower[0]));
        return [...lower].every(ch => row.includes(ch));
    })

};