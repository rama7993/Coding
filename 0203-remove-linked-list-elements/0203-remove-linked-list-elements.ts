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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let temp = dummy;

    while (temp) {
        if (temp.next?.val === val) {
            temp.next = temp.next.next;
        }
        else {
            temp = temp.next;
        }
    }

    return dummy.next;
};