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
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const rHead = reverse(slow.next);
    slow.next = null;
    alternateMerge(head, rHead);
};

var reverse = (head) => {
    let prev = null;
    let curr = head;

    while (curr) {
        let next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

var alternateMerge = (l1, l2) => {
    while (l1 && l2) {
        let next1 = l1.next;
        let next2 = l2.next;
        l1.next = l2;
        l2.next = next1;
        l1 = next1;
        l2 = next2;
    }
}