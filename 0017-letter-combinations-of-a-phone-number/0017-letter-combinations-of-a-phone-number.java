class Solution {
    
    private String keypad[]={"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    private List<String> res=new ArrayList<>();
    
    private void gen(String in,StringBuilder out,int i){
      if(i==in.length()){
          res.add(out.toString());
          return;
      }
      String pad=keypad[in.charAt(i)-'0'];
        for(int j=0;j<pad.length();j++){
            out.append(pad.charAt(j));
            gen(in,out,i+1);
            out.deleteCharAt(out.length() - 1);//backtrack
        }
    }
    
    public List<String> letterCombinations(String digits) {
        if(digits.length()==0)
            return res;
        StringBuilder sb= new StringBuilder();
        gen(digits,sb,0);
        return res;
    }
}