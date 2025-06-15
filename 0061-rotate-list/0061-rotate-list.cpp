/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int length(ListNode* head){
        int cnt=0;
        ListNode *temp=head;
        while(temp){temp=temp->next;cnt++;}
        return cnt;
    }
    ListNode* rotateRight(ListNode* head, int k) {
        if(!head) return 0;
        int n=length(head);
        int rot=n-(k%n)-1;
         ListNode *temp=head,*p;
        while(rot--){
            temp=temp->next;
        }
        p=temp->next;
        temp->next=NULL;
       auto *root=p;
        while(p->next){
            p=p->next;
        }
        p->next=head;
        return root;
    }
};