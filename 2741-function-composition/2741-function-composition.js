/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        let n = functions?.length;
        const lastFn = functions[n - 1];
        const remainingFns = functions.slice(0, -1);
        if (n === 0) return x;
        if (n === 1) return functions[0](x);
        return compose(remainingFns)(lastFn(x));
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */