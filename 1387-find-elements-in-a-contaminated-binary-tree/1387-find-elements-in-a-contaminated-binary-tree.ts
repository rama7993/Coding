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

class FindElements {
    private set = new Set<number>();

    constructor(root: TreeNode | null) {
        if (root) {
            this.recoverTree(root, 0);
        }
    }

    private recoverTree(node: TreeNode | null, val: number): void {
        if (!node) return;

        node.val = val;
        this.set.add(val);

        this.recoverTree(node.left, 2 * val + 1);
        this.recoverTree(node.right, 2 * val + 2);

    }

    find(target: number): boolean {
        return this.set.has(target);
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */