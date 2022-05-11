class Solution {
public:
    bool backspaceCompare(string s, string t) {
        stack<char>st;
        for(auto &x:s){
            if(x!='#')
                st.push(x);
            else if(!st.empty())
                st.pop();
        }
        string s1,s2;
        while(!st.empty()){
            s1+=st.top();
            st.pop();
        }
        for(auto &x:t){
            if(x!='#')
                st.push(x);
            else if(!st.empty())
                st.pop();
        }
        while(!st.empty()){
            s2+=st.top();
            st.pop();
        }
        return s1==s2;
    }
};