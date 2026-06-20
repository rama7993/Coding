/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    const q = [root];
    let front = 0;
    const res = [];

    while (front < q.length) {
        const len = q.length - front;
        let levels = [];
        for (let i = 0; i < len; i++) {
            const node = q[front++];
            levels.push(node.val);
            node.left && q.push(node.left);
            node.right && q.push(node.right);
        }
        res.push(levels);
    }

    return res;

};