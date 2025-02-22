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

function recoverFromPreorder(traversal: string): TreeNode | null {
    let index = 0;
    function dfs(depth: number): TreeNode | null {
        let currentDepth = 0;
        while (index < traversal.length && traversal[index] === '-') {
            currentDepth++;
            index++;
        }

        if (currentDepth !== depth) {
            index -= currentDepth; // Backtrack if depth mismatch
            return null;
        }

        //  node value
        let num = 0;
        while (index < traversal.length && /\d/.test(traversal[index])) {
            num = num * 10 + Number(traversal[index]);
            index++;
        }

        let node = new TreeNode(num);
        node.left = dfs(depth + 1);
        node.right = dfs(depth + 1);

        return node;
    }

    return dfs(0);
};