class Solution{

    // Function to find the trapped water between the blocks.
    static long trappingWater(int arr[], int n) { 
        
        // left[i] contains height of tallest bar to the 
        // left of ith bar including itself.
        int left[] = new int[n];
        
        // right[i] contains height of tallest bar to 
        // the right of ith bar including itself.
        int right[] = new int[n];
        
        // Storing values of tallest bar from first index till ith index.
        left[0] = arr[0];
        for (int i = 1;i < n;i++) {
            left[i] = Math.max(left[i - 1], arr[i]);
        }
        
        // Storing values of tallest bar from last index till ith index.
        right[n - 1] = arr[n - 1];
        for(int i = n - 2;i >= 0;i--) {
            right[i] = Math.max(right[i + 1], arr[i]);
        }
        
        
        // Storing the result by choosing the minimum of heights of tallest bar to
        // the right and left of the bar at current index and also subtracting the
        // value of current index to get water accumulated at current index.
        long water = 0;
        for (int i = 1;i < n - 1;i++) {
            water += Math.max(0, Math.min(left[i], right[i]) - arr[i]);
        }
        // returning the result.
        System.out.println(water);
    } 
}
