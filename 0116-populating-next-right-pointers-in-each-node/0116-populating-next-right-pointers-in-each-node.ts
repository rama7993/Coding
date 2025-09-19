/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: _Node | null): _Node | null {
    if (!root) return null;

    const connectNodes = (node1, node2) => {
        if (!node1 || !node2) return;
        node1.next = node2;
        connectNodes(node1.left, node1.right);
        connectNodes(node2.left, node2.right);
        connectNodes(node1.right, node2.left);
    }

    connectNodes(root.left, root.right);
    return root;
};