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
