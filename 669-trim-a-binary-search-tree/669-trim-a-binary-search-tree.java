/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if(root==null)
            return root;
        
        else if(root.val > high)//discard root->right sub tree since greater values
            return trimBST(root.left,low,high);
            
        else if(root.val < low)//discard root->left sub tree since lesser values
            return trimBST(root.right,low,high);
            
        else{//if root->val is in between low and high
            root.left=trimBST(root.left,low,high);
            root.right=trimBST(root.right,low,high);
            return root;
        }
    }
}