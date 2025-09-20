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

function isBalanced(root: TreeNode | null): boolean {
    let isBalanced = true;

    const height = (node) => {
        if (!node) return -1;

        const lft = height(node.left);
        const rght = height(node.right);

        if (Math.abs(lft - rght) > 1) isBalanced = false;

        return 1 + Math.max(lft, rght);
    }

    height(root);
    return isBalanced;
};

