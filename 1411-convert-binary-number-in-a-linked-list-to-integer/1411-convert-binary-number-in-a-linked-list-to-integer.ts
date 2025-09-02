/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number {

    const helper = (node) => {
        if (node === null) return [0, 0];
        const [val, len] = helper(node.next);
        return [node.val << len | val, len + 1]; //[val + (node.val * (2 ** len)),len+1]
    }

    return helper(head)[0];
};