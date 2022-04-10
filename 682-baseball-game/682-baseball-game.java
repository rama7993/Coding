class Solution {
    public int calPoints(String[] ops) {
        Stack<Integer> st=new Stack<>();
        for(int i=0;i<ops.length;i++){
            if(ops[i].equals("C") )
                st.pop();
            else if(ops[i].equals("+")){
                int a=st.pop(),b=st.peek();
                st.push(a);
                st.push(a+b);
            }
            else if(ops[i].equals("D"))
                st.push(st.peek()*2);
            
            else{
                st.push(Integer.parseInt(ops[i]));
            }
            
        }
        int ans=0;
        while(!st.isEmpty())
            ans+=st.pop();
        return ans;
    }
}