//{ Driver Code Starts
import java.util.*;
import java.util.stream.*; 
import java.lang.*;
import java.io.*;

public class Solution {
    
	public static void main (String[] args)throws IOException {
	Scanner sc = new Scanner(System.in);
		
		    String str = sc.nextLine();
		    String s1 = str.split(" ")[0];
		    String s2 = str.split(" ")[1];
		    
		    AA obj = new AA();
		    
		    if(obj.isAnagram(s1,s2))
		    {
		        System.out.print("YES");
		    }
		    else
		    {
		         System.out.print("NO");
		    }
		    
		    
		    
		
	}
}
// } Driver Code Ends


class AA
{
    //Function is to check whether two strings are anagram of each other or not.
    public static boolean isAnagram(String s1,String s2)
    {
        int h1[]=new int[26];
        int h2[]=new int[26];
        Arrays.fill(h1,0);

        int i;
        
        //an array of size 26, to store count of characters.
        if(s1.length()!=s2.length())
        {
            return false;
        }
        
        //storing count of each character in first string.
        for(i=0;i<s1.length();i++)
        {
            h1[s1.charAt(i)-'a']++;
        }
        
        //decrementing the count of characters encountered in the second string.
        for(i=0;i<s2.length();i++)
        {
            h1[s2.charAt(i)-'a']--;
        }
        
        //iterating over the array in which we stored the count initially 
        //to check if count at every index is equal to 0 or not.
        //count 0 indicates that number of characters in both strings are same.
        for(i=0;i<26;i++)
        {
            if(h1[i]!=0)
            {
                return false;
            }
        }
        //returning the result.
        return true;
    }
}