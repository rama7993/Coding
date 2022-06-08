class Solution {
public:
    int removePalindromeSub(string s) {
        int i=0,j=s.length()-1;
        while(i<j){
            if(s[i]==s[j]) i++,j--;
            else
                return 2;// not a palindrome( a or b)
        }
        return 1;//palindrome
    }
};