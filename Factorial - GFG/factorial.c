// { Driver Code Starts
//Initial Template for C

#include<stdio.h> 


 // } Driver Code Ends
//User function Template for C


long long int factorial(int n){
    if(n==0) return 1;
       return n*factorial(n-1);
}

// { Driver Code Starts.

int main() 
{ 
    int t;
    scanf("%d", &t);
    while(t--)
    {
        int N;
        scanf("%d", &N);
        printf("%lld\n", factorial(N));
    }
    return 0; 
}  // } Driver Code Ends