//{ Driver Code Starts
import java.io.*;

import java.util.*;

public class Solution {
    
	public static void main (String[] args) throws IOException {
		
		    //size of array
            Scanner sc = new Scanner(System.in);
		    int n = sc.nextInt();
		    int arr[] = new int[n];
		    String inputLine[] = sc.nextLine().trim().split(" ");
		    
		    //adding elements
		    for(int i=0; i<n; i++){
		        arr[i] = Integer.parseInt(inputLine[i]);
		    }
		    
		    AA obj = new AA();
		    
		    //calling maxSubarraySum() function
		    System.out.print(obj.maxSubarraySum(arr, n));
		
	}
}


// } Driver Code Ends


class AA{
    //Function to find the sum of contiguous subarray with maximum sum.
    long maxSubarraySum(int arr[], int n){
        
        long maxh = 0, maxf = arr[0];
        
        //Iterating over the array.
	    for(int i=0; i<n; i++){
	        
	        //Updating max sum till current index.
	        maxh+=arr[i];
	        //Storing max sum so far by choosing maximum between max 
            //sum so far and max sum till current index.
	        if(maxf<maxh)
                maxf=maxh; 
	        
	        //If max sum till current index is negative, we do not need to add
            //it to result so we update it to zero.
	        if(maxh<0)
	            maxh=0;

        }
         //returning the result.   
        return maxf;
    }
    
}


