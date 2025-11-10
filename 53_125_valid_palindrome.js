// https://leetcode.com/problems/valid-palindrome/



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLowerCase();
    let filterString="";
    let rev=""
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){  // regex and charcodeast both same h
//             if (
//   (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) ||
//   (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt())
// ) {
            filterString+= s[i];
            rev= s[i]+rev;// s[i] ko left side add krrge reverse ho jega.
        }
    }

    return filterString === rev;
};
// T= O(n)
// S= O(n)


// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {
//     s= s.toLowerCase();
//     let filterString="";
//     for(let i=0;i<s.length;i++){
//         if(s[i].match(/[a-z0-9]/i)){
//             filterString+= s[i];
//         }
//     }
//     let rev= filterString.split("").reverse().join("");
//     return filterString === rev;
// };