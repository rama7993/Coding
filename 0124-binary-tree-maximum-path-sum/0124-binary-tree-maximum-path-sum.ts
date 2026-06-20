/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
    let sum = -Infinity;

    const getMax = (node) => {
        if (!node) return 0;
        const l = getMax(node.left);
        const r = getMax(node.right);
        const path = node.val + Math.max(l, r);
        return Math.max(path, 0);
    }

    const dfs = (node) => {
        if (!node) return;
        const l = getMax(node.left);
        const r = getMax(node.right);
        sum = Math.max(sum, node.val + l + r);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return sum;
};