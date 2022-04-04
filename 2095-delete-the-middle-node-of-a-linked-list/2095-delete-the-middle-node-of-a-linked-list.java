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
    public ListNode deleteMiddle(ListNode head) {
        ListNode temp=new ListNode(0);//dummy node
        temp.next=head;
        ListNode prev=temp,slow=temp,fast=temp;
         while(fast!=null && fast.next!=null){
             prev=slow;
             slow=slow.next;
             fast=fast.next.next;
         }
        if(fast!=null){//even
            prev=slow;
            slow=slow.next;
        }
        prev.next=slow.next;
        return temp.next;
    }
}