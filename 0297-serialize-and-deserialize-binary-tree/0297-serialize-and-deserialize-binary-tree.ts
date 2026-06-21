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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (!root) return 'X';
    return `${root.val} ${serialize(root.left)} ${serialize(root.right)}`

};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const nodes = data.split(' ');
    const state = { idx: 0 };
    return helper(nodes, state);
};


function helper(nodes, state): TreeNode | null {
    const val = nodes[state.idx++];
    if (val === 'X') return null;
    const root = new TreeNode(+val);
    root.left = helper(nodes, state);
    root.right = helper(nodes, state);
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */