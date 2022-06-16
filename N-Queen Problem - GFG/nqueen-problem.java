// { Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0) {
            int n = Integer.parseInt(in.readLine());
            
            Solution ob = new Solution();
            ArrayList<ArrayList<Integer>> ans = ob.nQueen(n);
            if(ans.size() == 0)
                System.out.println("-1");
            else {
                for(int i = 0;i < ans.size();i++){
                    System.out.print("[");
                    for(int j = 0;j < ans.get(i).size();j++)
                        System.out.print(ans.get(i).get(j) + " ");
                    System.out.print("] ");
                }
                System.out.println();
            }
        }
    }
}// } Driver Code Ends


// User function Template for Java

class Solution{
    static  ArrayList<ArrayList<Integer>> res;
    
    static ArrayList<ArrayList<Integer>> nQueen(int n) {
        res=new ArrayList<>();
        int [][]chess = new int[n][n];
        nQueens(chess,0,n);
        return res;
    }
     
    public static void nQueens(int[][] chess, int row, int n) {
        if(row==chess.length) {
            ArrayList<Integer> arr=new ArrayList<>();
           for(int[] a:chess)
               for(int i=0;i<a.length;i++)
                   if(a[i]==1)
                       arr.add(i+1);
           res.add(arr);
        }

        for(int col=0;col<chess.length;++col) {
            if(isQueenSafe(chess,row,col,n)==true) {
                chess[row][col]=1;
                nQueens(chess,row+1,n);
                chess[row][col]=0;
            }
        }
    }
     public static boolean isQueenSafe(int[][] arr,int row,int col,int n)
   {
       //check up 
       for(int i = row-1 ; i>=0 ; i--)
         {
             if(arr[i][col]==1)
             return false;
         }
        //check diagonals
        for(int i=row-1,j=col-1;i>=0 && j>=0 ; j--,i--)
       {
             if(arr[i][j]==1)
             return false;
       }
         for(int i=row-1,j=col+1;i>=0 && j<arr[0].length ; j++,i--)
       {
             if(arr[i][j]==1)
             return false;
       }
       return true;
   }
}