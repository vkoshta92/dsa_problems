/**
 * ============================================================================
 * PROBLEM: Valid Palindrome
 * ============================================================================
 * Given a string s, determine if it is a palindrome, considering only 
 * alphanumeric characters and ignoring cases.
 * 
 * ============================================================================
 * APPROACH: Two Pointers
 * ============================================================================
 * Logic:
 * 1. Convert string to lowercase and remove non-alphanumeric characters
 * 2. Use two pointers: one from start, one from end
 * 3. Compare characters at both pointers
 * 4. If mismatch found, not a palindrome
 * 5. If pointers meet/cross, it's a palindrome
 * 
 * Why Two Pointers:
 * - Palindrome reads same forward and backward
 * - Compare first with last, second with second-last, etc.
 * - Only need to check first half with second half
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - O(n) to clean the string
 * - O(n) for two-pointer comparison
 * - Overall: O(n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Creating a new cleaned string
 * - Could be O(1) if we check in-place without cleaning
 * ============================================================================
 */

function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric chars
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = s.length - 1;

  // Two pointer check
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

// Test
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
