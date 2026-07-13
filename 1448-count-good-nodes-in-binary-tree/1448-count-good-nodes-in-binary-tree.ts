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

function goodNodes(root: TreeNode | null): number {
    let cnt = 0;

    const dfs = (root, max) => {
        if (!root) return;

        if (root.val >= max) {
            cnt++;
            max = root.val;
        }

        dfs(root.left, max);
        dfs(root.right, max);
    }

    dfs(root, root.val);
    return cnt;
};