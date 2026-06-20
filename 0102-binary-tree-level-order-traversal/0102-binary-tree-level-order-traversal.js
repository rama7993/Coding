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

    const q = new Queue();
    q.enqueue(root);
    const res = [];

    while (q.size()) {
        const size = q.size();
        const levels = [];
        for (let i = 0; i < size; i++) {
            const node = q.dequeue();
            levels.push(node.val);
            node.left && q.enqueue(node.left);
            node.right && q.enqueue(node.right);
        }
        res.push(levels);
    }

    return res;

};