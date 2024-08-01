//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
public class Solution{
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
       
            int sum = sc.nextInt();
            int N = sc.nextInt();
            int coins[] = new int[N];
            for (int i = 0; i < N; i++) coins[i] = sc.nextInt();
            AA ob = new AA();
            System.out.print(ob.count(coins, N, sum));
        
    }
}


// } Driver Code Ends


// User function Template for Java

class AA {
    // Function to count the number of ways to make a sum using given coins
    public long count(int coins[], int N, int sum) {
        // Create a table to store the number of ways to make each sum from 0 to 'sum'
        long table[] = new long[sum + 1];
        
        // Initialize the table with 0
        for (int i = 0; i < sum + 1; i++) 
            table[i] = 0;
        
        // There is always 1 way to make a sum of 0, so set table[0] to 1
        table[0] = 1;
        
        // Calculate the number of ways to make each sum from 0 to 'sum'
        for (int i = 0; i < N; i++)
            for (int j = coins[i]; j <= sum; j++) 
                table[j] += table[j - coins[i]];
        
        // Return the number of ways to make the desired sum
        return table[sum];
    }

}