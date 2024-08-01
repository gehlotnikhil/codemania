//{ Driver Code Starts
import java.io.*;
import java.util.*;
import java.util.stream.*;

public class Solution {

    public static void main(String[] args) throws IOException {
       Scanner sc = new Scanner(System.in);
            
            //taking input n
            int n = sc.nextInt();
            long arr[] = new long[n];
            String inputLine[] = sc.nextLine().trim().split(" ");
            
            //adding elements to the array
            for (int i = 0 ; i < n; i++) {
                arr[i] = Long.parseLong(inputLine[i]);
            }

            AA ob = new AA();
            
            //calling equilibriumPoint() function
            System.out.print(ob.equilibriumPoint(arr, n));
        
    }
}
// } Driver Code Ends


class AA {
    // Function to find equilibrium point in the array.
    public static int equilibriumPoint(long a[], int n) {

        //We store the sum of all array elements.
        long sum = 0;
        for (int i = 0; i < n; i++) 
           sum += a[i];

        //sum2 is used to store prefix sum.
        long sum2 = 0;

        for (int i = 0; i < n; i++) {
            
            //Leaving out the value of current element from suffix sum.
            sum = sum - a[i];
            
            //Checking if suffix and prefix sums are same.
            if (sum2 == sum) {
                //returning the index or equilibrium point.
                return (i + 1);
            }
            
            //Adding the value of current element to prefix sum.
            sum2 = sum2 + a[i];
        }
        return -1;
    }
}
