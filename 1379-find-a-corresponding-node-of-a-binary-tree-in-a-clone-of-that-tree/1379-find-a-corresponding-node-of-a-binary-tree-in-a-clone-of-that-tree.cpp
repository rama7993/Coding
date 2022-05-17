/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        unordered_map<TreeNode*,TreeNode*>mp;
        queue< pair<TreeNode*,TreeNode*> >q;
        q.push({original,cloned});
        while(!q.empty()){
           int sz=q.size();
           while(sz-->0){
              auto [a,b]=q.front();
               mp[a]=b;
               q.pop();
              if(a->left) q.push({a->left,b->left});
              if(a->right) q.push({a->right,b->right});
           }
            
        }
        
        return mp[target];
    }
};