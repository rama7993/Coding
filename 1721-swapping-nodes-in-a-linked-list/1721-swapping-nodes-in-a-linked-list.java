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
    public ListNode swapNodes(ListNode head, int k) {
        ListNode temp=new ListNode(0);//dummy
        temp.next=head;
        ListNode slow=temp,fast=temp;
        for(int i=0;i<k;i++){
            fast=fast.next;//move k
        }
        ListNode p=fast;//swap node1
        fast=fast.next;
        while(fast!=null){
            slow=slow.next;//moving upto n-k
            fast=fast.next;//move n-k
        }
        ListNode q=slow.next;//swap node2
        //swap
        if(p!=q){
        p.val=p.val^q.val;
        q.val=p.val^q.val;
        p.val=p.val^q.val;
        }
      
        return temp.next;
    }
}