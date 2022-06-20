class TrieNode {
    public:
    TrieNode* child[26];
    bool is_end;
};

class Solution {
private:
    static bool comp(const string &a,const string &b){
        return a.size()>b.size();
    }
    TrieNode *root=new TrieNode();
    int insert(string &word){
        TrieNode *temp=root;
        bool flag=false;//check for new branch or existing
        for(char &ch:word){
            if(!temp->child[ch-'a']){
                 temp->child[ch-'a']=new TrieNode();
                flag=true;
            }
               
            temp=temp->child[ch-'a'];
        }
        temp->is_end=true;
        return flag?word.size():0;
    }
public:
    int minimumLengthEncoding(vector<string>& words) {
        sort(words.begin(),words.end(),comp);
        int cnt=0;
        for(auto &word:words){
            reverse(word.begin(),word.end());//to match 
            int ans=insert(word);
            if(ans)
                cnt+=ans+1;
        }
        return cnt;
    }
      
};