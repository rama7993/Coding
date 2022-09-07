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
 * @return {string}
 */
var tree2str = function(root) {
  let sub = String(root.val);
    if (root.left) //left check
        sub += "(" + tree2str(root.left) + ")";
    if (root.right) { //right check
        if (!root.left) sub += "()"; //left not present, but right present
        sub += "(" + tree2str(root.right) + ")"; 
    }
    return sub;
};