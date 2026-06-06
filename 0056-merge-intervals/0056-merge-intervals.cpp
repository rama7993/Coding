class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& interval) {
         vector<vector<int>> result;
      
        sort(interval.begin(),interval.end());
       
        result.push_back(interval[0]);
      
        for(int i=1;i<interval.size();i++)
        {
            if(result.back()[1]>=interval[i][0])
                result.back()[1]=max(result.back()[1],interval[i][1]);
            
            else
            {
               
                result.push_back(interval[i]);
            }
        }
        return result;
    }
};