class Solution {
public:
    int calPoints(vector<string>& ops) {
        stack<int>st;
        for(string &ch:ops){
            if(ch=="C" && !st.empty())
                st.pop();
            else if(ch=="+" && st.size()>=2){
                int a=st.top();
                st.pop();
                int b=st.top();
                st.push(a);
                st.push(a+b);
            }
            else if(ch=="D" && !st.empty())
                st.push(st.top()*2);
            else{
                st.push(stoi(ch));
            }
        }
        int ans=0;
        while(!st.empty())
            ans+=st.top(),st.pop();
        return ans;
    }
};