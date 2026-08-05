/**
 * ============================================================================
 * PROBLEM: Is Subsequence
 * ============================================================================
 * Do strings diye hain: s aur t.
 * Check karna hai ki s, t ka subsequence hai ya nahi.
 * 
 * Subsequence ka matlab:
 * - Characters same order me hone chahiye
 * - Continuous hona zaroori nahi hai
 * 
 * ============================================================================
 * APPROACH: Two Pointer
 * ============================================================================
 * Logic:
 * 1. Do pointers lete hain:
 *    - i → string s ke liye
 *    - j → string t ke liye
 * 2. t ko traverse karte hain:
 *    - Agar s[i] === t[j] → i ko aage badhao
 * 3. Agar i poora s cover kar leta hai → subsequence mil gaya
 * 
 * Why this works:
 * - Order maintain karte hue match kar rahe hain
 * - Har character ko ek baar hi check karte hain
 * 
 * ============================================================================
 * TIME COMPLEXITY: O(n)
 * - n = length of t (t ko ek baar traverse karte hain)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Extra space use nahi ho raha
 * ============================================================================
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=j=0;
    while(j<t.length){
        if(s[i]===t[j]){
            ++i;
        }
        ++j
    }
    return i===s.length
    
};