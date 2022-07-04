class Solution {
public:
   int candy(vector<int>& arr) {
  int i,n=arr.size();
  vector<int>cand;
  cand.push_back(1);
  for(i=0;i<n-1;i++){
      if(arr[i+1]>arr[i]){
          cand.push_back(cand[i]+1);
      }
      else {cand.push_back(1);}
  }
  
  for(i=0;i<n-1;i++){
      if (arr[n-2-i]>arr[n-1-i] and cand[n-2-i]<=cand[n-i-1] )
        cand[n-2-i]=cand[n-i-1]+1;
  }
  int sum=0;
  for(auto i:cand){
      sum+=i;
  }
  return sum;
    }
};