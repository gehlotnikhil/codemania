//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

public class Solution
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
      
            int n =sc.nextInt();
            int arr[] = new int[n];
            
            for(int i = 0; i < n; i++)
             arr[i] = sc.nextInt();
             
           System.out.print(new AA().majorityElement(arr, n)); 
        
    }
}
// } Driver Code Ends


//User function Template for Java

class AA
{
     /* Function to find the candidate for Majority */
    static int findCandidate(int a[], int size) 
    { 
        int maj_index = 0, count = 1; 
        // use linear search to compute candidate for majority element
        for (int i = 1; i < size; i++) 
        { 
            if (a[maj_index] == a[i]) 
                count++; 
            else
                count--; 
            if (count == 0) 
            { 
                maj_index = i; 
                count = 1; 
            } 
        } 
        return a[maj_index]; 
    }
    // Function to check if the candidate occurs more than n/2 times 
    static boolean isMajority(int a[], int size, int cand) 
    { 
        int count = 0; 
        for (int i = 0; i < size; i++) 
            if (a[i] == cand) 
            count++; 
        if (count > size/2) 
            return true; 
        else
            return false; 
    }
    static int majorityElement(int a[], int size)
    {
        /* Find the candidate for Majority*/
        int cand = findCandidate(a, size); 
  
        /* Print the candidate if it is Majority*/
        if (isMajority(a, size, cand) == true) 
            return cand;
        else
            return -1;
    }
}