class Solution {
public:
    string removeDuplicates(string s, int k) {
        stack<pair<char,int>>st;
        
        for(auto &ch:s){
          if(!st.empty() and st.top().first==ch)
              st.top().second+=1;
          else
               st.push({ch,1});
          if(st.top().second==k)
               st.pop();
        }
        string res;
        while(!st.empty()){
            int cnt=st.top().second;
            while(cnt--) res+=st.top().first;
            st.pop();
        }
        reverse(res.begin(),res.end());
        return res;
    }
};