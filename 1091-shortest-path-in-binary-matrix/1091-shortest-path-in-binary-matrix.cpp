class Solution {
    
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
       int n=grid.size();
       if(grid[0][0]!=0 or grid[n-1][n-1]!=0) 
           return -1;
        queue< tuple<int,int,int> > q;
        q.push({0,0,1});//{x,y,dist}
        grid[0][0]=2;//make as visited
       vector<pair<int,int>>dir{ {-1,0},{+1,0},{0,+1},{0,-1},{-1,-1},{+1,-1},{-1,+1},{+1,+1}};
    while(!q.empty()){
        int sz=q.size();
        while(sz-->0){
            auto [x,y,dist]=q.front();
             q.pop();
            
            if(x==n-1 and y==n-1) return dist;//target
            for(auto &d:dir){
                int r=x+d.first;
                int c=y+d.second;
                if(r<0 or c<0 or r>=n or c>=n or grid[r][c]!=0) continue;
                 q.push({r,c,dist+1});
                 grid[r][c]=2;//make as visited
                
            }
        }
    }
        return -1;
    }
};