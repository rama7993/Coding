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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;

    const hl = depth(root.left);
    const hr = depth(root.right);
    if (Math.abs(hl - hr) > 1) return false;

    return isBalanced(root.left) && isBalanced(root.right);
};

var depth = function (root) {
    if (!root) return 0;
    const hl = depth(root.left);
    const hr = depth(root.right);
    return 1 + Math.max(hl, hr);
}