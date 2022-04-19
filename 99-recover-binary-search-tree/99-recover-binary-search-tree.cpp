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
private:
    vector<int>v;
    void inorder(TreeNode* root){
        if(!root)
            return;
        inorder(root->left);
        v.push_back(root->val);
        inorder(root->right);
    }
    void recover(TreeNode* root,int &i){
        if(!root)
            return;
        recover(root->left,i);
        root->val=v[i++];
        recover(root->right,i);
    }
public:
    void recoverTree(TreeNode* root) {
        inorder(root);
        sort(v.begin(),v.end());
        int i=0;
        recover(root,i);
    }
};