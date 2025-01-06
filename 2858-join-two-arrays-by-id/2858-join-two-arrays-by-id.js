/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const mp = {};
    arr1.forEach((obj) => {
        mp[obj.id] = obj;
    })

    arr2.forEach((obj) => {
        const { id } = obj;
        mp[id] = { ...mp[id], ...obj };
    })

    return Object.values(mp);
};