class Solution {
private:
    vector<vector<int>> res;
    vector<int>vect;
    void dfs(int src,vector<vector<int>>&adj){
          vect.push_back(src);
         if(src==adj.size()-1){//if target node
            res.push_back(vect);
          }
        for(int &node:adj[src]){
            dfs(node,adj);
        }
        vect.pop_back();//backtrack
    }
    
public:
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        dfs(0,graph);
        return res;
    }
};