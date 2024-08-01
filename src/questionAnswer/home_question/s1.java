//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

public class Solution
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        
            
            int N=sc.nextInt();
            int K=sc.nextInt();
            Integer[] Arr = new Integer[N]; 
  
            // Appending new elements at 
            // the end of the list 
            for (int i = 0; i < N; i++) {
                int x = sc.nextInt();
                Arr[i]=x; 
            }

            AA ob = new AA();
            System.out.print(ob.maximumSumSubarray(K,Arr,N));
        }
    }


// } Driver Code Ends


//User function Template for Java

class AA{
    static int  maximumSumSubarray(int K, Integer[] Arr,int N){
        int sum=0,ans=0;
        for(int i=0;i<K;i++)
        {
            sum+=Arr[i];
        }
        ans=Math.max(ans,sum);
        int i=0;
        for(int j=K;j<N;j++)
        {
            sum-=Arr[i++];
            sum+=Arr[j];
            ans=Math.max(ans,sum);
        }
        return ans;
    }
};