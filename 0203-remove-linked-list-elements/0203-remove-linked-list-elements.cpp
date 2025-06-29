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
    ListNode* removeElements(ListNode* root, int val) {
        if(!root or(!root->next and root->val==val)) return NULL;
        if(!root->next and root->val!=val) return root;
        ListNode *head,*dummy=new ListNode(-1);
        dummy->next=root;
        head=dummy;
        while(head and head->next){
            if(head->next->val==val)
                head->next=head->next->next;
            else head=head->next;
        }
        
        return dummy->next;
    }
};