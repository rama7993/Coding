/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;

    let result = lists[0];

    for (let i = 1; i < lists.length; i++) {
        result = merge(result, lists[i]);
    }

    return result;
};


var merge = (l1, l2) => {
    const dummy = new ListNode();
    let temp = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            temp.next = l1;
            l1 = l1.next
        } else {
            temp.next = l2;
            l2 = l2.next
        }
        temp = temp.next;
    }

    temp.next = l1 || l2;

    return dummy.next;
}