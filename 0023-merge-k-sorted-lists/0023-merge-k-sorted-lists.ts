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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;
    const pq = new MinPriorityQueue<ListNode>({
        compare: (a, b) => a.val - b.val
    });

    for (const l of lists) {
        l && pq.enqueue(l);
    }

    let dummy = new ListNode(0), curr = dummy;

    while (pq.size() > 0) {
        let node = pq.dequeue();
        curr.next = node;
        curr = curr.next;
        node.next && pq.enqueue(node.next)
    }


    return dummy.next;
};