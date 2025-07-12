/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummy = new ListNode(-1, head);
    let curr = head, prev = dummy;

    while (curr && curr.next) {
        let first = curr, second = curr.next;

        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;
        curr = first.next;
    }

    return dummy.next;
};