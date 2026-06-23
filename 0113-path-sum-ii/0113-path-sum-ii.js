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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) return [];
    const res = [];
    let path = [];

    const dfs = (curr, target) => {
        if (!curr) return;

        target -= curr.val;
        path.push(curr.val)

        if (!curr.left && !curr.right) {
            target === 0 && res.push([...path]);
            path.pop();
            return;
        }
        curr.left && dfs(curr.left, target)
        curr.right && dfs(curr.right, target)

        path.pop();
    }


    dfs(root, targetSum)
    return res;
};