//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class s1
{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
      
            
            int N=sc.nextInt();
            int K=sc.nextInt();
            ArrayList<Integer> Arr = new ArrayList<Integer>(N); 
  
            // Appending new elements at 
            // the end of the list 
            for (int i = 0; i < N; i++) {
                int x = sc.nextInt();
                Arr.add(x); 
            }

            AA ob = new AA();
            System.out.print(ob.maximumSumSubarray(K,Arr,N));
        }
    
}

// } Driver Code Ends


//User function Template for Java
class AA{
    static long maximumSumSubarray(int K, ArrayList<Integer> Arr,int N){
        long sum=0,ans=0;
        for(int i=0;i<K;i++)
        {
            sum+=Arr.get(i);
        }
        ans=Math.max(ans,sum);
        int i=0;
        for(int j=K;j<N;j++)
        {
            sum-=Arr.get(i++);
            sum+=Arr.get(j);
            ans=Math.max(ans,sum);
        }
        return ans;
    }
}