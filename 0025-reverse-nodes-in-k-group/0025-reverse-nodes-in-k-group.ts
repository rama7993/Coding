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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) return head;

    let len = 0, node = head;
    while (node) {
        len++;
        node = node.next;
    }

    let dummy = new ListNode(0, head), curr = head, prevTail = dummy;

    while (len >= k) {
        let [newHead, newTail, nextNode] = reverse(curr, k);
        prevTail.next = newHead;
        newTail.next = nextNode;

        curr = nextNode;
        prevTail = newTail;

        len -= k;
    }

    return dummy.next;
};

function reverse(head: ListNode | null, k: number) {
    let prev = null, curr = head;

    while (curr && k > 0) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        k--;
    }

    return [prev, head, curr];
}