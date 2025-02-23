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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    if (!preorder.length || !postorder.length) return null;

    const root = new TreeNode(preorder[0]);
    if (preorder.length === 1) return root;

    const leftSubRootVal = preorder[1];
    const leftSubTreeSize = postorder.indexOf(leftSubRootVal) + 1;

    root.left = constructFromPrePost(preorder.slice(1, leftSubTreeSize + 1), postorder.slice(0, leftSubTreeSize));
    root.right = constructFromPrePost(preorder.slice(leftSubTreeSize + 1), postorder.slice(leftSubTreeSize, -1));
    return root;
};