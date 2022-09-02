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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let q=[root]//queue
    let arr=[]
    while(q.length){
      let size=q.length
      let num=0.0,n=size
      while(size--){
          let node=q.shift()
          num+=node.val
          if(node.left) q.push(node.left)
          if(node.right) q.push(node.right)
      }
        arr.push(num/n)
    }
    return arr
    
};