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
    int camera=0;
    string cover(TreeNode* root){
    if(!root)
        return "covered";
    string l=cover(root->left);
    string r=cover(root->right);
 if(l=="require" or r=="require"){// if not covered cover it
    camera++;
    return "has_camera";
 }
 if(l=="has_camera" or r=="has_camera")
     return "covered";//if any child has camera current root will cover
 return "require";//if none of child has camera ,require from parent;
}
public:
    int minCameraCover(TreeNode* root) {
        if(cover(root)=="require")
            camera+=1;
        return camera;
    }
};