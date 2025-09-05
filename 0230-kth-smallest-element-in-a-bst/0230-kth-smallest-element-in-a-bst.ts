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

function kthSmallest(root: TreeNode | null, k: number): number {
    let cnt = 0, res;

    const inorder = (node) => {
        if (!node) return null;
        inorder(node.left);
        cnt++;
        if (cnt === k) res = node.val;
        inorder(node.right);
    }

    inorder(root);
    return res;
};