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
    int i=0;
    void inorder(TreeNode* root){
        if(!root)
            return;
        inorder(root->left);
        v.push_back(root->val);
        inorder(root->right);
    }
    void recover(TreeNode* root){
        if(!root)
            return;
        recover(root->left);
        root->val=v[i++];
        recover(root->right);
    }
public:
    void recoverTree(TreeNode* root) {
        inorder(root);
        sort(v.begin(),v.end());
        recover(root);
    }
};