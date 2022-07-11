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

function rightSideView(root: TreeNode | null): number[] {
  var arr:number[]=[]
  var q:TreeNode[]=[]//queue
 if(!root) return arr
  q.push(root)
  while(q.length!=0){
      var sz:number=q.length
      while(sz>0){
             var temp:TreeNode=q.shift()
             if(sz==1) arr.push(temp.val)
             if(temp.left) q.push(temp.left)
             if(temp.right) q.push(temp.right)
             sz--
            }
  }
  return arr
};