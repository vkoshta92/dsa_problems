/*
====================================================================
Problem: Valid Palindrome II
Difficulty: Easy
Companies: Amazon, Facebook, Microsoft, Apple
====================================================================

Given a string s, return true if the s can be palindrome after
deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true
Explanation: "aba" is already a palindrome, no deletion needed.

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c' to get "aba" which
             is a palindrome.

Example 3:
Input: s = "abc"
Output: false
Explanation: You would need to delete more than one character to
             make it a palindrome.

Example 4:
Input: s = "deeee"
Output: true
Explanation: You could delete one 'e' to get "dee" which is
             a palindrome.
====================================================================
*/

/*
====================================================================
Hinglish Logic Explanation (Two Pointer Approach):
====================================================================

Bhai, yeh problem normal palindrome check mein ek twist hai.
Normally hum do pointers lagake check karte hain ki string
palindrome hai ya nahi. Yahan ek character delete karke
palindrome bana sakte hain.

Algorithm:
1. Two pointers lagao -- left (start) aur right (end)
2. Dono taraf se compare karo characters:
   - Agar match karte hain → left++, right--
   - Agar match nahi karte hain → yahan problem hai!
3. Jab mismatch ho, toh do possibilities hain:
   a) Left character hatao aur check karo kya string palindrome hai
      (left+1 se right tak check karo)
   b) Right character hatao aur check karo kya string palindrome hai
      (left se right-1 tak check karo)
4. Agar inmein se koi bhi ek true de de, toh answer true hai.

Helper function isPalindrome:
- Yeh check karta hai ki given range [start, end] mein string
  palindrome hai ya nahi.

Key Insight: Jab mismatch hota hai, humein sirf ek chance milta hai
ek character hatane ka. Isliye dono options check karte hain --
left ya right. Agar dono mein se koi ek bhi kaam kar jaye,
toh string valid palindrome hai.

Time Complexity: O(n) - worst case mein poora string ek baar traverse
Space Complexity: O(1) - sirf pointers use ho rahe hain
====================================================================
*/

/**
 * Helper function to check if substring s[start...end] is palindrome
 * @param {string} s
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
function isPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // Mismatch mila -- check both options
            // Option 1: left character hatao (left+1 se right tak check)
            // Option 2: right character hatao (left se right-1 tak check)
            return isPalindrome(s, left + 1, right) ||
                   isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    // Poora match ho gaya -- palindrome hai
    return true;
}

/*
====================================================================
Time Complexity: O(n)
- Main function ek baar poora string traverse karti hai O(n)
- Worst case mein helper function bhi O(n) call ho sakta hai
- Total: O(n) + O(n) = O(n) -- kyunki constant operations hain

Space Complexity: O(1)
- Sirf do pointers (left, right) use ho rahe hain
- Helper function mein bhi sirf pointers hain
- Koi extra space nahi lagega
====================================================================
*/

// ======================== TEST CASES ========================

// Test Case 1: Already palindrome
console.log("Test 1: \"aba\"");
console.log("Expected Output: true");
console.log("Actual Output: " + validPalindrome("aba"));
console.log("---");

// Test Case 2: One character delete karke palindrome
console.log("Test 2: \"abca\"");
console.log("Expected Output: true");
console.log("Actual Output: " + validPalindrome("abca"));
console.log("---");

// Test Case 3: Cannot be palindrome with one deletion
console.log("Test 3: \"abc\"");
console.log("Expected Output: false");
console.log("Actual Output: " + validPalindrome("abc"));
console.log("---");

// Test Case 4: Multiple same characters
console.log("Test 4: \"deeee\"");
console.log("Expected Output: true");
console.log("Actual Output: " + validPalindrome("deeee"));
console.log("---");

// Test Case 5: Single character (always palindrome)
console.log("Test 5: \"a\"");
console.log("Expected Output: true");
console.log("Actual Output: " + validPalindrome("a"));
console.log("---");

// Test Case 6: Empty string (palindrome)
console.log("Test 6: \"\"");
console.log("Expected Output: true");
console.log("Actual Output: " + validPalindrome(""));
console.log("---");

// Test Case 7: Longer palindrome with one skip
console.log("Test 7: \"lcupuufwoohqwodwguxhjqxgnawpjtelungf\"");
console.log("Expected Output: true");
console.log("Actual Output: " + validPalindrome("lcupuufwoohqwodwguxhjqxgnawpjtelungf"));
console.log("---");

module.exports = { validPalindrome };
