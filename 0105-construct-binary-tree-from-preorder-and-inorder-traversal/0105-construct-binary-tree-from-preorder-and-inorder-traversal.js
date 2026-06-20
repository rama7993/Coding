/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    const idx = inorder.indexOf(preorder[0]);
    //Inorder ( left, root, right)
    const li = inorder.slice(0, idx);
    const ri = inorder.slice(idx + 1);

    const len = li.length;
    //Preorder ( root, left, right)
    const lp = preorder.slice(1, len + 1);
    const rp = preorder.slice(len + 1);

    //build
    const root = new TreeNode(preorder[0]);
    root.left = buildTree(lp, li);
    root.right = buildTree(rp, ri);

    return root;
};
