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
    private int level_h_sum(TreeNode root,int h){
        Queue<TreeNode>q=new LinkedList<>();
        q.add(root);
        int level=0;
        while(!q.isEmpty()){
            int sz=q.size();
            level++;
            if(level==h) break;//deepest level
            while(sz-- >0){
                TreeNode temp=q.poll();
                if(temp.left!=null) q.add(temp.left);
                if(temp.right!=null) q.offer(temp.right);
            }
        }
        int sum=0;
        while(!q.isEmpty()){
            sum+=q.poll().val;
        }
        return sum;
    }
    
    private int depth(TreeNode root){
        if(root==null) return -1;
        return Math.max(depth(root.left),depth(root.right))+1;
    }
    public int deepestLeavesSum(TreeNode root) {
        int h=depth(root);
        return level_h_sum(root,h+1);
    }
}