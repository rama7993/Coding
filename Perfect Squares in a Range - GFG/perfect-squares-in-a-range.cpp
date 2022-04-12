// { Driver Code Starts

#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends

class Solution {
  public:
    int numOfPerfectSquares(int a, int b) {
        int x=sqrt(a),y=sqrt(b);
        return (x*x==a) ? y-x+1 : y-x ;
    }
};

// { Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int a,b;
        
        cin>>a>>b;

        Solution ob;
        cout << ob.numOfPerfectSquares(a,b) << endl;
    }
    return 0;
}  // } Driver Code Ends