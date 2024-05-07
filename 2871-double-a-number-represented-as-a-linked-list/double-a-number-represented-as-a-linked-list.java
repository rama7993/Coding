
/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode doubleIt(ListNode head) {
        Stack<Integer> st = new Stack<Integer>();
        Stack<Integer> res = new Stack<Integer>();

        // Push doubled values into the stack
        for (ListNode temp = head; temp != null; temp = temp.next) {
            st.push(temp.val * 2);
        }

        int carry = 0;
        while (!st.isEmpty()) {
            int sum = carry + st.pop();
            carry = sum / 10;
            res.push(sum % 10);
        }

        // Handle any remaining carry
        while (carry != 0) {
            res.push(carry % 10);
            carry /= 10;
        }

        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;

        // Create new list from the result stack
        while (!res.isEmpty()) {
            current.next = new ListNode(res.pop());
            current = current.next;
        }

        return dummy.next;
    }
}
