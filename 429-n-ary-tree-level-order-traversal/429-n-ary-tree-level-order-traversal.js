/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) 
        return []
    const queue=[root],arr=[]
    while(queue.length){
        let level=[],size=queue.length
        while(size--){
            let curr=queue.shift()
            level.push(curr.val)
            for (child of curr.children){
                queue.push(child)
            }
        }
        arr.push(level) 
    }
    return arr
};