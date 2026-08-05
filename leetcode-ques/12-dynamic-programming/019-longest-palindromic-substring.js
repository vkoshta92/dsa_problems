/*
 * ==========================================
 * Problem: Longest Palindromic Substring
 * Difficulty: Medium
 * Companies: Amazon, Google, Meta, Microsoft, Apple
 * LeetCode: #5
 * ==========================================
 *
 * Problem Statement:
 * Given a string s, return the longest palindromic substring in s.
 * A string is palindromic if it reads the same forward and backward.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Example 3:
 * Input: s = "a"
 * Output: "a"
 *
 * Example 4:
 * Input: s = "ac"
 * Output: "a" (or "c", since both are length 1 palindromes)
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, isme humein longest palindrome substring nikalni hai. Expand Around
 * Center approach iska sabse clean aur intuitive solution hai.
 *
 * Approach: Expand Around Center
 *
 * Step 1: start aur maxLength variables rakkho jo longest palindrome ki
 *         starting position aur length track karein.
 *
 * Step 2: Har index i ko center maano (0 se n-1 tak):
 *         - Odd length palindrome: expandAroundCenter(i, i)
 *         - Even length palindrome: expandAroundCenter(i, i+1)
 *
 * Step 3: ExpandAroundCenter(left, right) function:
 *         - Jab tak left >= 0, right < n, aur s[left] == s[right]:
 *              left--, right++
 *         - Jab loop break ho, current palindrome ki length = right - left - 1
 *           (kyunki left aur right ab invalid positions par hain)
 *         - Agar current length > maxLength, toh start aur maxLength update karo
 *
 * Step 4: End mein s.substring(start, start + maxLength) return karo.
 *
 * Example Walkthrough: s = "babad"
 *
 * Initialize: start = 0, maxLength = 1
 *
 * i=0:
 *   Odd: expand(0,0): 'b'=='b', left=-1,right=1 (stop). Length = 1-(-1)-1 = 1
 *        1 > 1? No. Same hai toh update nahi karte (ya kar sakte hain, farak nahi padta)
 *   Even: expand(0,1): s[0]='b', s[1]='a' (not equal, stop). Length = 1-0-1 = 0
 *
 * i=1:
 *   Odd: expand(1,1): 'a'=='a'
 *        expand(0,2): s[0]='b', s[2]='b' (EQUAL!)
 *        expand(-1,3): left out of bounds, stop
 *        Length = 3-(-1)-1 = 3. 3 > 1? YES! start = 0, maxLength = 3
 *        Found: "bab" (from index 0 to 2)
 *   Even: expand(1,2): s[1]='a', s[2]='b' (not equal). Length = 2-1-1 = 0
 *
 * i=2:
 *   Odd: expand(2,2): 'b'=='b'
 *        expand(1,3): s[1]='a', s[3]='a' (EQUAL!)
 *        expand(0,4): s[0]='b', s[4]='d' (not equal), stop
 *        Length = 4-0-1 = 3. 3 > 3? No.
 *        Found: "aba" (same length as "bab", either is fine)
 *   Even: expand(2,3): s[2]='b', s[3]='a' (not equal). Length = 3-2-1 = 0
 *
 * i=3:
 *   Odd: expand(3,3): 'a'=='a'. Length = 1
 *   Even: expand(3,4): s[3]='a', s[4]='d' (not equal). Length = 0
 *
 * i=4:
 *   Odd: expand(4,4): 'd'=='d'. Length = 1
 *   Even: expand(4,5): right out of bounds. Length = 0
 *
 * Longest: "bab" (index 0, length 3)
 *
 * Key Insight: Har index ko center maan kar expand karte hain. Odd length
 * palindromes ka center ek character hota hai, even length ka center
 * do characters ke beech ka gap hota hai (i.e., two adjacent characters).
 */

function longestPalindrome(s) {
    if (s.length === 0) return "";

    const n = s.length;
    let start = 0;
    let maxLength = 1;

    function expandAroundCenter(left, right) {
        // Expand jab tak bounds mein hain aur characters match karte hain
        while (left >= 0 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }

        // Current palindrome length = (right - 1) - (left + 1) + 1 = right - left - 1
        const currentLength = right - left - 1;

        if (currentLength > maxLength) {
            start = left + 1;
            maxLength = currentLength;
        }
    }

    // Har character se center karke expand karo (odd + even)
    for (let i = 0; i < n; i++) {
        expandAroundCenter(i, i);     // Odd length palindrome
        expandAroundCenter(i, i + 1); // Even length palindrome
    }

    return s.substring(start, start + maxLength);
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n²)
 *   - Har character ke liye odd aur even center se expand karte hain
 *   - Worst case: "aaaaa" mein har center se O(n) tak expand hoga
 *   - Total iterations: n centers * O(n) expansion each = O(n²)
 *
 * Space Complexity: O(1)
 *   - Sirf start, maxLength, aur loop variables
 *   - Koi extra matrix ya array nahi ban raha
 *   - substring() result ke liye O(n) space, but that's the output
 */

// ===========================================
// Test Cases with Expected Output
// ===========================================

// Test Case 1: Two possible answers
console.log('Test 1: s = "babad"');
console.log('Expected: "bab" or "aba"');
console.log("Output:", longestPalindrome("babad"));
console.log();

// Test Case 2: Even length palindrome
console.log('Test 2: s = "cbbd"');
console.log('Expected: "bb"');
console.log("Output:", longestPalindrome("cbbd"));
console.log();

// Test Case 3: Single character
console.log('Test 3: s = "a"');
console.log('Expected: "a"');
console.log("Output:", longestPalindrome("a"));
console.log();

// Test Case 4: Whole string is palindrome
console.log('Test 4: s = "racecar"');
console.log('Expected: "racecar"');
console.log("Output:", longestPalindrome("racecar"));
console.log();

module.exports = { longestPalindrome };
