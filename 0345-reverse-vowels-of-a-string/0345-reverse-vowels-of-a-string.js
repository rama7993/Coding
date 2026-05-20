/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let i = 0, j = s.length - 1;
    const arr = s.split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    while (i <= j) {
        while (!vowels.has(arr[i].toLowerCase()) && i < j) i++;
        while (!vowels.has(arr[j].toLowerCase()) && i < j) j--;

        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++; j--;
    }

    return arr.join('');
};