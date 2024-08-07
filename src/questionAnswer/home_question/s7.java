//{ Driver Code Starts
import java.util.*;
import java.io.*;
import java.lang.*;

public class Solution
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
       
            int n =sc.nextInt();
            int a[] = new int[n];
            
            int i = 0;
            for(i = 0; i < n; i++)
              a[i] = sc.nextInt();
              
            int[] s = new AA().calculateSpan(a, n);
            
            for(i = 0; i < n; i++)
            {
if(i==n-1){                System.out.print(s[i]);continue;
}
                System.out.print(s[i] + " ");
            }
            
        }
     
    
}
// } Driver Code Ends


class AA
{
    //Function to calculate the span of stockâ€™s price for all n days.
    public static int[] calculateSpan(int price[], int n)
    {
        int S[] = new int[n];
        Stack<Integer> st=new Stack<>();
        st.push(0);
        
        //span value of first day is always 1.
        S[0]=1;
        
        for(int i=1;i<n;i++) 
        { 
            //we pop elements from the stack till price at top of stack 
            //is less than or equal to current price.
            while(!st.isEmpty() && price[i]>=price[st.peek()])
            {
                st.pop();
            }
            
            //if stack becomes empty, then price[i] is greater than all 
            //elements on left of it in list so span is i+1.
            //Else price[i] is greater than elements after value at top of stack.
            S[i]=st.isEmpty()?i+1:i-st.peek();
            
            //pushing this element to stack.
            st.push(i);
            
        }
        //returning the list.
        return S;
    }
}
