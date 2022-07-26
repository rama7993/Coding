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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(root==p || root==q || !root)
        return root
   const lft:TreeNode=lowestCommonAncestor(root.left,p,q)
   const rght:TreeNode=lowestCommonAncestor(root.right,p,q)
    if(!lft)
        return rght
    if(!rght)
         return lft
    return root
};