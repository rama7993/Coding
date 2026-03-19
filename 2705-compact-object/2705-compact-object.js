/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (obj === null) return null;

    if (Array.isArray(obj)) {
        const arr = [];
        obj.forEach((val, idx) => {
            const value = compactObject(val);
            if (value) arr.push(value);
        })
        return arr;
    }

    else if (typeof obj === 'object') {
        const mp = {};
        for (const [key, val] of Object.entries(obj)) {
            const value = compactObject(val);
            if (value) mp[key] = value;
        }
        return mp;
    }

    return obj;
};