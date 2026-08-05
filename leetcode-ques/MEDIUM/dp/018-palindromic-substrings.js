/*
 * ==========================================
 * Problem: Palindromic Substrings
 * Difficulty: Medium
 * Companies: Amazon, Google, Meta, Microsoft
 * LeetCode: #647
 * ==========================================
 *
 * Problem Statement:
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 *
 * Example 1:
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic substrings: "a", "b", "c".
 *
 * Example 2:
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic substrings: "a", "a", "a", "aa", "aa", "aaa".
 *   Substrings at indices: [0,0], [1,1], [2,2], [0,1], [1,2], [0,2]
 *
 * Example 3:
 * Input: s = "abba"
 * Output: 6
 * Explanation: "a", "b", "b", "a", "bb", "abba" = 6
 */

/*
 * ==========================================
 * Hinglish Logic Explanation (Detailed)
 * ==========================================
 *
 * Bhai, palindrome substrings count karne ka simplest approach Expand Around
 * Center hai. Har character ko center maano aur left-right expand karke
 * palindrome check karo.
 *
 * Approach: Expand Around Center
 *
 * Step 1: Count variable banake 0 se initialize karo.
 *
 * Step 2: Har index i ko center maano (0 se n-1 tak):
 *         - Odd length palindrome ke liye: center = i (single character)
 *         - Even length palindrome ke liye: center = i aur i+1 ke beech mein
 *
 * Step 3: ExpandAroundCenter(left, right) function:
 *         - Jab tak left >= 0, right < n, aur s[left] == s[right]:
 *              count++ (ek naya palindrome mila)
 *              left--, right++ (expand karo)
 *
 * Step 4: Har index ke liye dono cases (odd aur even) ke liye
 *         expandAroundCenter call karo.
 *
 * Example Walkthrough: s = "aaa"
 *
 * i=0 (center = 0):
 *   Odd: expand(0,0) -> "a" count=1
 *   Even: expand(0,1) -> s[0]==s[1] ("a"=="a"), "aa" count=2
 *
 * i=1 (center = 1):
 *   Odd: expand(1,1) -> "a" count=3
 *   Even: expand(1,2) -> s[1]==s[2] ("a"=="a"), "aa" count=4
 *
 * i=2 (center = 2):
 *   Odd: expand(2,2) -> "a" count=5
 *   Even: expand(2,3) -> right out of bounds, skip
 *
 * Wait, we missed "aaa". Let's trace again:
 *
 * i=0:
 *   Odd: expand(0,0): s[0]=="a", count=1 (substring "a" at [0,0])
 *        expand(0,1): bound check 0>=0 && 1<3 || s[0]=="a" != s[1]=="a"? Hmm wait s[0]=="a" and s[1]=="a", so...
 *        Actually let's re-check: "aaa" -> s[0]='a', s[1]='a', s[2]='a'
 *        expand(0,0): palindrome "a", count=1
 *   Even: expand(0,1): s[0]=='a', s[1]=='a' => palindrome "aa", count=2
 *         expand(-1,2): left out of bounds, stop
 *
 * i=1:
 *   Odd: expand(1,1): palindrome "a", count=3
 *        expand(0,2): s[0]=='a', s[2]=='a' => palindrome "aaa", count=4
 *   Even: expand(1,2): s[1]=='a', s[2]=='a' => palindrome "aa", count=5
 *
 * i=2:
 *   Odd: expand(2,2): palindrome "a", count=6
 *
 * Total = 6. Correct!
 *
 * Key Insight: Odd length palindromes ke liye left=right=i se start karo.
 * Even length ke liye left=i, right=i+1 se start karo. Expand karte waqt
 * dono taraf barabar badhao. Yeh approach saare possible palindromes
 * cover kar leti hai kyunki har palindrome ka ek center hota hai (character
 * ya gap ke beech).
 */

function countSubstrings(s) {
    const n = s.length;
    let count = 0;

    // Expand Around Center helper function
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    // Har character ko center maankar expand karo
    for (let i = 0; i < n; i++) {
        // Odd length palindrome (single character center)
        expandAroundCenter(i, i);

        // Even length palindrome (two adjacent characters as center)
        expandAroundCenter(i, i + 1);
    }

    return count;
}

/*
 * ==========================================
 * Time & Space Complexity Analysis
 * ==========================================
 *
 * Time Complexity: O(n²)
 *   - Har character ke liye odd aur even palindrome expand karte hain
 *   - Worst case mein (sab same characters jaise "aaaa"), har center se
 *     O(n) tak expand karte hain
 *   - Total n characters, har ek O(n) expansion => O(n²)
 *
 * Space Complexity: O(1)
 *   - Sirf count variable aur loop variables use ho rahe hain
 *   - Expand function recursion nahi, iterative hai
 *   - Koi extra array ya data structure nahi
 */

// ===========================================
// Test Cases with Expected Output
// ===========================================

// Test Case 1: All distinct characters
console.log("Test 1: s = 'abc'");
console.log("Expected: 3 (a, b, c)");
console.log("Output:", countSubstrings("abc"));
console.log();

// Test Case 2: All same characters
console.log("Test 2: s = 'aaa'");
console.log("Expected: 6 (a,a,a,aa,aa,aaa)");
console.log("Output:", countSubstrings("aaa"));
console.log();

// Test Case 3: Even length palindrome
console.log("Test 3: s = 'abba'");
console.log("Expected: 6 (a,b,b,a,bb,abba)");
console.log("Output:", countSubstrings("abba"));
console.log();

// Test Case 4: Long palindrome with nested ones
console.log("Test 4: s = 'racecar'");
console.log("Expected: 10 (r,a,c,e,c,a,r,cec,aceca,racecar)");
console.log("Output:", countSubstrings("racecar"));
console.log();

module.exports = { countSubstrings };
