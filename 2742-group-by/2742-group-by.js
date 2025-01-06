/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const mp = {};
    for (let obj of this) {
        const key = fn(obj);
        if (key in mp) {
            mp[key].push(obj);
        } else {
            mp[key] = [obj];
        }
    }
    return mp;
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */