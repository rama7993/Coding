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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let res = new ListNode();
    let temp = res;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            temp.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        temp = temp.next;
    }

    if (list1) temp.next = list1;
    if (list2) temp.next = list2;

    return res.next;
};