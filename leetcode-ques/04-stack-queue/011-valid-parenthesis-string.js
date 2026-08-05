/*
|--------------------------------------------------------------------------
| Problem: Valid Parenthesis String
| Difficulty: Medium
| Companies: Google, Amazon, Meta, Microsoft, Bloomberg, Uber
| LeetCode: #678
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given a string s containing only three types of characters:
| '(', ')', and '*', return true if s is a valid string.
|
| Definition of valid string:
| - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
| - Any right parenthesis ')' must have a corresponding left parenthesis '('.
| - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
| - '*' could be treated as '(' or ')' or an empty string "".
|
| Example 1:
| Input: s = "()"
| Output: true
|
| Example 2:
| Input: s = "(*)"
| Output: true
| '*' can be empty → "()" ✓
|
| Example 3:
| Input: s = "(*))"
| Output: true
| '*' as '(' → "(())" ✓
|
| Example 4:
| Input: s = "(((((*(()((((*((**(((()()*)()()()*((((**)())*"
| Output: n/a (complex case)
|
| Example 5:
| Input: s = "*)"
| Output: true
| '*' as '(' → "()" ✓
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, yeh problem valid parentheses jaisi hai, lekin ek twist hai — '*'
| wildcard hai jo '(' ya ')' ya kuch bhi nahi ban sakta hai.
|
| Approach: Min-Max Open Brackets (Greedy)
| ----------------------------------------
|
| Idea: Hum do numbers track karenge:
| - minOpen: minimum possible OPEN brackets ab tak (assuming '*' = ')' or '')
| - maxOpen: maximum possible OPEN brackets ab tak (assuming '*' = '(' or '')
|
| Rules:
| ------
| 1. '(' character: minOpen++ and maxOpen++ (unmatched '(' badh gaya)
| 2. ')' character: minOpen-- and maxOpen-- (ek '(' match ho gaya)
| 3. '*' character:
|    - As '('  ⇒ maxOpen++ (could be another open bracket)
|    - As ')'  ⇒ minOpen-- (could close an existing open bracket)
|    - As ''   ⇒ no change
|
|    So: minOpen = Math.max(0, minOpen - 1), maxOpen = maxOpen + 1
|
| After each step:
| - Agar maxOpen < 0 ho jaaye → invalid return false
|   (matlab itne zyada ')' hain ki '*' ko '(' maan kar bhi match nahi kar sakte)
|
| - minOpen ko kabhi negative nahi hone dena (minOpen = Math.max(0, minOpen))
|   kyunki minimum open brackets negative ho hi nahi sakte.
|
| Finally:
| - Agar minOpen === 0 → return true
|   (saare '(' ko match kiya ja sakta hai)
| - Agar minOpen > 0 → return false
|   (kuch '(' bache hain jinhe match nahi kar sakte)
|
| Dry Run: s = "(*))"
|
| i=0, '(' : minOpen=1, maxOpen=1, maxOpen≥0 ✓
| i=1, '*' : minOpen=max(0,0)=0, maxOpen=2, maxOpen≥0 ✓
| i=2, ')' : minOpen=max(0,-1)=0, maxOpen=1, maxOpen≥0 ✓
| i=3, ')' : minOpen=max(0,-1)=0, maxOpen=0, maxOpen≥0 ✓
|
| End: minOpen=0 → true ✓
|
| Another Dry Run: s = "(*)("
|
| i=0, '(' : minOpen=1, maxOpen=1
| i=1, '*' : minOpen=max(0,0)=0, maxOpen=2
| i=2, ')' : minOpen=max(0,-1)=0, maxOpen=1
| i=3, '(' : minOpen=1, maxOpen=2
|
| End: minOpen=1 → false ✗ (ek '(' bach gaya unmatched)
|
|--------------------------------------------------------------------------
*/

/**
 * @param {string} s
 * @return {boolean}
 */
function checkValidString(s) {
    let minOpen = 0;
    let maxOpen = 0;

    for (const char of s) {
        if (char === '(') {
            minOpen += 1;
            maxOpen += 1;
        } else if (char === ')') {
            minOpen = Math.max(0, minOpen - 1);
            maxOpen -= 1;
        } else {
            // char === '*'
            minOpen = Math.max(0, minOpen - 1); // treat as ')' or ''
            maxOpen += 1;                       // treat as '('
        }

        // Too many ')' even if all '*' were '('
        if (maxOpen < 0) {
            return false;
        }
    }

    // All open brackets must be closable
    return minOpen === 0;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n)
| - String is traversed exactly once.
| - Each character processed in O(1).
|
| Space Complexity: O(1)
| - Only two integer variables (minOpen, maxOpen) used.
| - No extra data structures.
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Valid Parenthesis String ===");
console.log("");

// Test Case 1: Simple valid without '*'
console.log("Test 1: s = '()'");
console.log("Expected: true");
console.log("Output:", checkValidString("()"));
console.log("");

// Test Case 2: '*' as empty
console.log("Test 2: s = '(*)'");
console.log("Expected: true");
console.log("Output:", checkValidString("(*)"));
console.log("");

// Test Case 3: '*' as '(' to close extra ')'
console.log("Test 3: s = '(*))'");
console.log("Expected: true");
console.log("Output:", checkValidString("(*))"));
console.log("");

// Test Case 4: Invalid — too many '('
console.log("Test 4: s = '(*('");
console.log("Expected: false");
console.log("Output:", checkValidString("(*("));
console.log("");

// Test Case 5: Invalid — starts with ')'
console.log("Test 5: s = ')*'");
console.log("Expected: false");
console.log("Output:", checkValidString(")*"));
console.log("");

module.exports = { checkValidString };
