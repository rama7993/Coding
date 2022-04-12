class Solution {
public:
    int kthFactor(int n, int k) {
        vector<int> arr;
        for(int i=1;i<=sqrt(n);i++){
            if(n%i==0){
                arr.push_back(i);
            }
        }
        int z=arr.size(),j=z-1;
        while(j>=0){
            if(arr[j]!=n/arr[j])
                arr.push_back(n/arr[j]);
            j--;
        }
        
        for(int i=0;i<arr.size();i++){
            if(i==k-1)
                return arr[i];
        }
        return -1;
    }
};