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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let temp1 = l1, temp2 = l2, dummy = new ListNode(-1), carry = 0, temp = dummy;
    while (temp1 && temp2) {
        let sum = temp1.val + temp2.val + carry;
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        temp.next = new ListNode(sum);
        temp = temp.next;
        temp1 = temp1.next;
        temp2 = temp2.next;
    }

    while (temp1) {
        let sum = temp1.val + carry;
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        temp.next = new ListNode(sum);
        temp = temp.next;
        temp1 = temp1.next;

    }

    while (temp2) {
        let sum = temp2.val + carry;
        if (sum > 9) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        temp.next = new ListNode(sum);
        temp = temp.next;
        temp2 = temp2.next;

    }
    if (carry)
        temp.next = new ListNode(carry);
    return dummy.next;
};