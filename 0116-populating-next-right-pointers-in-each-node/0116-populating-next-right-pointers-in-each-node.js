/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return null;
    const q = [root];
    while (q.length) {
        const size = q.length;
        let prev = null;

        for (let i = 0; i < size; i++) {
            const node = q.shift();
            if (prev) prev.next = node;
            prev = node;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return root;
};