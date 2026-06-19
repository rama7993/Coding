/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let curr = head;
    const nodes = [];

    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }

    let i = 0, j = nodes.length - 1;

    while (i < j) {
        nodes[i].next = nodes[j]; i++;
        nodes[j].next = nodes[i]; j--;
    }
    nodes[i].next = null;
};