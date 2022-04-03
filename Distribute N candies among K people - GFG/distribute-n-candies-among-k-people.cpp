// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


 // } Driver Code Ends
//User function Template for C++

class Solution {
  public:
    vector<long long> distributeCandies(int n, int k) {
        vector<long long>vect(k,0);
        int cand=1;
        long long i=0;
        while(n>0){
            vect[i]+=cand;
            n-=cand;
            i++;
            cand++;
            if(i==k) i=0;
            if(cand>n) cand=n;
        }
        return vect;
    }
};

// { Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int N,K;
        cin>>N>>K;
        
        Solution ob;
        vector<long long> res = ob.distributeCandies(N,K);
        
        for(int i=0; i<res.size(); i++)
            cout<<res[i]<<" ";
        cout<<endl;
    }
    return 0;
}  // } Driver Code Ends