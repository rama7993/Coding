function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const array = [];
    arr.forEach((num, idx) => {
        array[idx] = fn(num, idx);
    })
    return array;
};