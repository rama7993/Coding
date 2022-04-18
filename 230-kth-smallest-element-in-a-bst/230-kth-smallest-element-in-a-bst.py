# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
     
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
    
        def inorder(node):
            if not node:
                return 
            inorder(node.left)
            self.k-=1
            if(self.k==0):
                self.ans=node.val
            inorder(node.right)
        
        self.ans=None
        self.k=k
        inorder(root)
        return self.ans
    
    
            
        
        