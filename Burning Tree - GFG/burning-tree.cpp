// { Driver Code Starts
//Initial Template for C++

#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
};


Node *buildTree(string str) {
    // Corner Case
    if (str.length() == 0 || str[0] == 'N')
        return NULL;

    // Creating vector of strings from input
    // string after spliting by space
    vector<string> ip;

    istringstream iss(str);
    for (string str; iss >> str;)
        ip.push_back(str);

    // Create the root of the tree
    Node *root = new Node(stoi(ip[0]));

    // Push the root to the queue
    queue<Node *> queue;
    queue.push(root);

    // Starting from the second element
    int i = 1;
    while (!queue.empty() && i < ip.size()) {

        // Get and remove the front of the queue
        Node *currNode = queue.front();
        queue.pop();

        // Get the current Node's value from the string
        string currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current Node
            currNode->left = new Node(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->left);
        }

        // For the right child
        i++;
        if (i >= ip.size())
            break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

            // Create the right child for the current Node
            currNode->right = new Node(stoi(currVal));

            // Push it to the queue
            queue.push(currNode->right);
        }
        i++;
    }

    return root;
}


 // } Driver Code Ends
//User function Template for C++

class Solution {
 private:
 queue<Node*>q;
 unordered_map<Node*,Node*>parent;
 unordered_map<Node*,bool>visit;
 Node* bfs(Node* root,int target){
     Node *temp;
     q.push(root);
     while(!q.empty()){
        auto curr=q.front();
        q.pop();
        if(curr->data==target){
            temp=curr;//store target node;
        }
        if(curr->left){
            parent[curr->left]=curr;
            q.push(curr->left);
        }
        if(curr->right){
             parent[curr->right]=curr;
             q.push(curr->right);
        }
     }
     return temp;
 }
  public:
    int minTime(Node* root, int target) 
    {  Node * target_node=bfs(root,target);//store parent of all nodes
        q.push(target_node);//start from target node
        visit[target_node]=true;
        int Time=0;
        while(!q.empty()){
           int size=q.size();
           bool check=false;
          while(size--) {
            auto curr=q.front();
            q.pop();
            if(curr->left and !visit[curr->left]){
                q.push(curr->left);
                check = true;
                visit[curr->left]=true;
            }
             if(curr->right and !visit[curr->right]){
                visit[curr->right]=true;
                check = true;
                q.push(curr->right);
            }
              
             if(parent[curr] and !visit[parent[curr]]){
                 visit[parent[curr]]=true;
                 check = true;
                 q.push(parent[curr]);
             }
               
        }
          if(check) Time++;
        
      }
        
        return Time;
    }
};

// { Driver Code Starts.

int main() 
{
    int tc;
    scanf("%d ", &tc);
    while (tc--) 
    {    
        string treeString;
        getline(cin, treeString);
        // cout<<treeString<<"\n";
        int target;
        cin>>target;
        // cout<<target<<"\n";

        Node *root = buildTree(treeString);
        Solution obj;
        cout<<obj.minTime(root, target)<<"\n"; 

        cin.ignore();

    }


    return 0;
}
  // } Driver Code Ends