/*
|--------------------------------------------------------------------------
| Problem: Decode String
| Difficulty: Medium
| Companies: Google, Amazon, Meta, Microsoft, Apple, Bloomberg, Uber
| LeetCode: #394
|--------------------------------------------------------------------------
|
| Problem Statement:
| Given an encoded string, return its decoded string.
|
| The encoding rule is: k[encoded_string], where the encoded_string inside
| the square brackets is being repeated exactly k times. Note that k is
| guaranteed to be a positive integer.
|
| You may assume that the input string is always valid; there are no extra
| white spaces, square brackets are well-formed, etc.
|
| Furthermore, you may assume that the original data does not contain any
| digits and that digits are only for those repeat numbers, k. For example,
| there will not be input like 3a or 2[4].
|
| The test cases are generated so that the length of the output will never
| exceed 10⁵.
|
| Example 1:
| Input: s = "3[a]2[bc]"
| Output: "aaabcbc"
|
| Example 2:
| Input: s = "3[a2[c]]"
| Output: "accaccacc"
| Explanation: First decode inner: 2[c] -> "cc", then outer: 3[a + cc] -> "accaccacc"
|
| Example 3:
| Input: s = "2[abc]3[cd]ef"
| Output: "abcabccdcdcdef"
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Hinglish Logic Explanation:
|--------------------------------------------------------------------------
|
| Bhai, yeh problem nested brackets ke saath string ko decode karne ki hai.
| Encoded format hai: k[string] jahan string ko k baar repeat karna hai.
|
| Approach: Two Stacks
| --------------------
| 1. countStack: repeat counts store karta hai
| 2. stringStack: '[' se pehle wali strings store karta hai
| 3. currentString: ab tak bani hui decoded string
| 4. currentNum: ab tak bana hua repeat count (multi-digit ho sakta hai)
|
| Algorithm:
| ---------
| Har character ko scan karo:
|
| a) Digit (0-9):
|    currentNum = currentNum * 10 + digit
|    (kyunki number multi-digit ho sakta hai jaise 12, 345)
|
| b) '[' (opening bracket):
|    - countStack mein currentNum push karo
|    - stringStack mein currentString push karo
|    - currentNum = 0 aur currentString = "" reset karo
|    (taaki naye nested content ke liye fresh start ho)
|
| c) ']' (closing bracket):
|    - countStack se repeatCount pop karo
|    - stringStack se previousString pop karo
|    - currentString ko repeatCount baar repeat karo
|    - previousString + repeated = naya currentString
|
| d) Letter (a-z):
|    currentString mein character append karo
|
| Dry Run: s = "3[a2[c]]"
|
| i=0, '3': currentNum = 3
| i=1, '[': countStack=[3], stringStack=[""], currentNum=0, currentString=""
| i=2, 'a': currentString = "a"
| i=3, '2': currentNum = 2
| i=4, '[': countStack=[3,2], stringStack=["","a"], currentNum=0, currentString=""
| i=5, 'c': currentString = "c"
| i=6, ']': repeatCount=2, prevString="a"
|           repeated = "c".repeat(2) = "cc"
|           currentString = "a" + "cc" = "acc"
| i=7, ']': repeatCount=3, prevString=""
|           repeated = "acc".repeat(3) = "accaccacc"
|           currentString = "" + "accaccacc" = "accaccacc"
|
| Output: "accaccacc" ✓
|--------------------------------------------------------------------------
*/

/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
    const countStack = [];
    const stringStack = [];
    let currentString = "";
    let currentNum = 0;

    for (const char of s) {
        if (char >= '0' && char <= '9') {
            // Digit: build the number (multi-digit possible)
            currentNum = currentNum * 10 + parseInt(char, 10);
        } else if (char === '[') {
            // Opening bracket: push current state and reset
            countStack.push(currentNum);
            stringStack.push(currentString);
            currentNum = 0;
            currentString = "";
        } else if (char === ']') {
            // Closing bracket: decode the nested content
            const repeatCount = countStack.pop();
            const previousString = stringStack.pop();
            currentString = previousString + currentString.repeat(repeatCount);
        } else {
            // Letter: append to current string
            currentString += char;
        }
    }

    return currentString;
}

/*
|--------------------------------------------------------------------------
| Time Complexity: O(n * maxK)
| - n = input string length
| - maxK = maximum repeat count in the string
| - In worst case, string.repeat(k) can take O(k * m) where m is string length
| - But since output is bounded by 10⁵, effectively O(output length)
|
| Space Complexity: O(n)
| - Stacks mein worst case O(n) elements (nested brackets ke liye)
| - currentString bhi O(output length) space leta hai
|--------------------------------------------------------------------------
*/

// ===================== TEST CASES =====================

console.log("=== Decode String ===");
console.log("");

// Test Case 1: Simple without nesting
console.log("Test 1: s = '3[a]2[bc]'");
console.log("Expected: 'aaabcbc'");
console.log("Output:", decodeString("3[a]2[bc]"));
console.log("");

// Test Case 2: Nested brackets
console.log("Test 2: s = '3[a2[c]]'");
console.log("Expected: 'accaccacc'");
console.log("Output:", decodeString("3[a2[c]]"));
console.log("");

// Test Case 3: Mixed with regular letters
console.log("Test 3: s = '2[abc]3[cd]ef'");
console.log("Expected: 'abcabccdcdcdef'");
console.log("Output:", decodeString("2[abc]3[cd]ef"));
console.log("");

// Test Case 4: Multi-digit repeat count
console.log("Test 4: s = '10[a]'");
console.log("Expected: 'aaaaaaaaaa'");
console.log("Output:", decodeString("10[a]"));
console.log("");

module.exports = { decodeString };
