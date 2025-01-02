/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const toBe = (arg) => {
        if (val !== arg) {
            throw new Error("Not Equal");
        }
        return true;
    };

    const notToBe = (arg) => {
        if (val === arg) {
            throw new Error("Equal");
        }
        return true;
    };

    return { toBe, notToBe };
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */