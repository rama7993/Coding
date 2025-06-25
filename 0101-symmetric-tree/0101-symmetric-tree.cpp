/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool issame(TreeNode* s,TreeNode* t){
        if(s==NULL or t==NULL)
            return s==NULL and t==NULL;
        else if (s->val==t->val)
            return issame(s->left,t->right) and issame(s->right,t->left);
        return false;
    }
  
    bool isSymmetric(TreeNode* root) {
        if(root==NULL) return false;
        return issame(root->left,root->right);
    }
};