// { Driver Code Starts


#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends


class Solution {
 private :
   bool prime(long long val){
       if(val==1) return false;
       for(long long i=2;i<=sqrt(val);i++){
           if(val%i==0) return false;
           
       }
       return true;
   }
  public:
    int count3DivNums(long long L, long long R) {
        int cnt=0;
        long long x=sqrtl(L),y=sqrtl(R);
        for(long long i=x+1;i<=y;i++){
            if(prime(i)) cnt++;
        }
        return cnt;
    }
};

// { Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        long long L,R;
        
        cin>>L>>R;

        Solution ob;
        cout << ob.count3DivNums(L,R) << endl;
    }
    return 0;
}  // } Driver Code Ends