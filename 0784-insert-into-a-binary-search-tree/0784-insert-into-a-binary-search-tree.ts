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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val);
    let curr = root;
    while (curr) {
        if (curr.val > val) {
            if (curr.left) {
                curr = curr.left;
            } else {
                curr.left = new TreeNode(val);
                break;
            }
        } else {
            if (curr.right) {
                curr = curr.right;
            } else {
                curr.right = new TreeNode(val);
                break;
            }
        }
    }
    return root;
};