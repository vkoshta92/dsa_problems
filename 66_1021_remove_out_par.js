/**
 * Question: 66_1021_remove_out_par (Stack: Remove Outermost Parentheses)
 * 
 * Explanation (Hinglish):
 * Brackets ki ek lambi string di hai jisme kayi groups hain (jaise "(()())"). 
 * Humein har group ke 'baahar' wale brackets ko nikalna hai. 
 * Hum level check karte hain: agar stack mein pehle se koi bracket hai, matlab hum 'andar' hain, to hi hum bracket save karenge. 
 * Agar stack khali tha aur '(' aaya, to wo baahar wala hai, use ignore kar denge.
 * 
 * Logic:
 * 1. Stack use karo level track karne ke liye.
 * 2. Loop characters: agar '(' aaye: agar stack.length > 0, to result mein jodo. Phir push karo.
 * 3. Agar ')' aaye: stack.pop() karo. Agar stack.length > 0, to result mein jodo.
 * 4. Isse outermost '(' aur ')' hamesha skip ho jayenge.
 */

// https://leetcode.com/problems/remove-outermost-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i])
            let len = stack.length;
            //    if(len>1){
            //         ans= ans+s[i];
            //     }
            ans = ans + ((stack.length > 1) ? s[i] : "");
        }
        else {
            let len = stack.length;
            // if(len>1){
            //     ans= ans+s[i];
            // }
            ans = ans + ((stack.length > 1) ? s[i] : "");

            stack.pop(); // push ke bad lenth check krnger pop ke phle
        }
    }
    return ans

};
// T- O(n)
// space O(n)