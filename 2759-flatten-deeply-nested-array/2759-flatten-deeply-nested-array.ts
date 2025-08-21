type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) return arr.slice();

    const stack: [number | MultiDimensionalArray, number][] =
        arr.map((item) => [item, n]);

    const res: (number | MultiDimensionalArray)[] = [];

    while (stack.length > 0) {
        const [curr, depth] = stack.pop();

        if (Array.isArray(curr) && depth > 0) {
            stack.push(...curr.map(el => [el, depth - 1] as [number | MultiDimensionalArray, number]));
        } else {
            res.push(curr);
        }
    }

    return res.reverse();
};