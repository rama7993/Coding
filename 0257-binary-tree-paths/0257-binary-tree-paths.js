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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    if (!root) return [];
    const res = [];

    const dfs = (root, path) => {
        if (!root.left && !root.right) {
            res.push(path);
            return;
        }
        root.left && dfs(root.left, path + '->' + String(root.left.val));
        root.right && dfs(root.right, path + '->' + String(root.right.val));
    }


    dfs(root, String(root.val));
    return res;
};