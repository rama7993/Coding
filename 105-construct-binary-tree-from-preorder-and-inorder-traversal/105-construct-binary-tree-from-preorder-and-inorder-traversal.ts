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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!inorder.length || !preorder.length) return null
    
    let root:TreeNode=new TreeNode(preorder[0])
    let idx:number=inorder.indexOf(preorder[0])//find index of root
    
    root.left=buildTree(preorder.slice(1,idx+1),inorder.slice(0,idx))
    root.right=buildTree(preorder.slice(idx+1),inorder.slice(idx+1))
    
    return root
};