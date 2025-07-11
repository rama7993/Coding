/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public void reorderList(ListNode head) {
        if (head == null || head.next == null)
            return;

        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode revHead = reverseList(slow.next);
        slow.next = null;

        mergeAlternate(head, revHead);
    }

    private ListNode reverseList(ListNode head) {
        if (head == null || head.next == null)
            return head;
        ListNode newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    private ListNode mergeAlternate(ListNode l1, ListNode l2) {
        ListNode head = l1;
        ListNode temp1, temp2;

        while (l1 != null && l2 != null) {
            temp1 = l1.next;
            temp2 = l2.next;

            l1.next = l2;
            if (temp1 == null) {
                break;
            }

            l2.next = temp1;

            l1 = temp1;
            l2 = temp2;
        }
        return head;
    }

}
