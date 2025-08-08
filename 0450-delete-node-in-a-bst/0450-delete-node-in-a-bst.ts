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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        //2 children
        const temp = findMin(root.right);
        root.val = temp.val;
        root.right = deleteNode(root.right, temp.val);
    }

    return root;
};

function findMin(node: TreeNode): TreeNode {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}