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
     int ans=0,cnt=0;
    private void lar(TreeNode root,int k){
        
       if(root==null)
         return;
      
       lar(root.left,k);
         cnt++;
         if(k==cnt)
              ans=root.val;
        
       lar(root.right,k);
   }
    public int kthSmallest(TreeNode root, int k) {
       lar(root,k);
       return ans;
    }
}