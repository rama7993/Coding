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
var maxPathSum = function(root) {
    var max=-Infinity;
    dfs(root);
    return max;
    
    function dfs(node){
        if(node==null) return 0;
        let lft=Math.max(dfs(node.left),0);
        let rght=Math.max(dfs(node.right),0);
        let straightPath=Math.max(node.val,node.val+lft,node.val+rght)//3 possibilities
        let curvedPath=node.val+lft+rght;
        max=Math.max(max,curvedPath,straightPath);
        return straightPath;
    }
};