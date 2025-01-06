type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    const ans = [];
    for (let elem of arr) {
        if (Array.isArray(elem) && n > 0) {
            const flatten = flat(elem, n - 1);
            ans.push(...flatten)
        } else {
            ans.push(elem)
        }
    }
    return ans;
};