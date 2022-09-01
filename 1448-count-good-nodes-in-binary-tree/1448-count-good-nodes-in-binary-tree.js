/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    var cnt=0;
    function dfs(root,max){
        if(!root) return 
        if(root.val>=max){
            max=root.val
            cnt++
        }
        dfs(root.left,max)
        dfs(root.right,max)
      
    }
    dfs(root,root.val)
    return cnt
};