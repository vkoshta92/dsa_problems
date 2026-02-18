/**
 * Question: 53_125_valid_palindrome (String: Valid Palindrome)
 * 
 * Explanation (Hinglish):
 * Humein check karna hai ki string palindrome hai ya nahi, par isme kachra (spaces, symbols) bhi ho sakta hai. 
 * Pehle string ko saaf karo: sirf letters aur numbers rakho aur baaki sab hata do. 
 * Phir use ulta karke asli saaf string se match karo.
 * 
 * Logic:
 * 1. String ko lowercase karo.
 * 2. Loop chalao aur sirf `a-z` aur `0-9` characters ko `filterString` mein daalo.
 * 3. Ak saath `rev` string bhi banate jao.
 * 4. Last mein `filterString === rev` check karo.
 */



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let filterString = "";
    let rev = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {  // regex and charcodeast both same h
            //             if (
            //   (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) ||
            //   (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt())
            // ) {
            filterString += s[i];
            rev = s[i] + rev;// s[i] ko left side add krrge reverse ho jega.
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