class TrieNode {
    public:
    TrieNode* child[26];
    bool is_end;
    
    int insert(string &word,TrieNode *root){
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
};

class Solution {
private:
    static bool comp(const string &a,const string &b){
        return a.size()>b.size();
    }
    
public:
    int minimumLengthEncoding(vector<string>& words) {
        TrieNode *root=new TrieNode();
        sort(words.begin(),words.end(),comp);
        int cnt=0;
        for(auto &word:words){
            reverse(word.begin(),word.end());//to match 
            int ans=root->insert(word,root);
            if(ans)
                cnt+=ans+1;
        }
        return cnt;
    }
      
};