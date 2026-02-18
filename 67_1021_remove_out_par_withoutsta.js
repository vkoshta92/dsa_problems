/**
 * Question: 67_1021_remove_out_par_withoutsta (Stack: Remove Outermost Parentheses - No Stack)
 * 
 * Explanation (Hinglish):
 * Is approach mein hum stack nahi, sirf ek count (level) use karte hain. 
 * Jab '(' aaye to level badhao. Agar level 1 se bada ho gaya, matlab hum 'andar' hain. 
 * Jab ')' aaye to agar level 1 se bada hai, to use jodo aur phir level ghatao. 
 * Ye bina extra space liye humein result de deta hai.
 * 
 * Logic:
 * 1. `level = 0` aur `ans = ""` lo.
 * 2. '(' milne par: agar `level > 0` hai to jodo, phir `level++`.
 * 3. ')' milne par: `level--` karo, agar `level > 0` hai to jodo.
 */

// https://leetcode.com/problems/remove-outermost-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let level= 0;
    let ans= "";
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
          ++level;
            ans= ans+ ((level>1)? s[i]:"");
        }
        else{
           
            ans= ans+ ((level>1)? s[i]:"");
             --level
        }
    }
    return ans
    
};
// T- O(n)
//extra space O(1)


//other way

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var removeOuterParentheses = function(s) {
//     let level= -1;
//     let ans= "";
//     for(let i=0;i<s.length;i++){
//         if(s[i]==="("){
//           ++level;
//             ans= ans+ (level? s[i]:"");
//         }
//         else{
           
//             ans= ans+ (level? s[i]:"");
//              --level
//         }
//     }
//     return ans
    
// };
