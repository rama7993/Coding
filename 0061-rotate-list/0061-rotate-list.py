# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if(not head or not head.next or not k):
            return head
        
        Len=1
        curr,temp=head,head
        while(temp.next):
            temp=temp.next
            Len+=1
            
        temp.next=head
        
        k%=Len
        for i in range(Len-k-1):
            curr=curr.next
        new_head=curr.next
        curr.next=None
        return new_head
        
            
        
        