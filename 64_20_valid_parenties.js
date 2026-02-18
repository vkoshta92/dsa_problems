/**
 * Question: 64_20_valid_parenties (Stack: Valid Parentheses)
 * 
 * Explanation (Hinglish):
 * Brackets ((), [], {}) ka sahi joda pakadna hai. 
 * Rule simple hai: jo sabse aakhir mein khula hai, wo sabse pehle band hona chahiye. 
 * Hum ek Stack use karte hain. Jab bhi khule bracket (opening) aayein, unhe stack mein daalo. 
 * Jab koi band bracket (closing) aaye, to stack ke top se match karo. Agar joda sahi hai to thik, warna galat!
 * 
 * Logic:
 * 1. Mapping banao opening bracket se uske closing bracket ki.
 * 2. Loop characters: agar opening bracket hai to stack mein push karo.
 * 3. Agar closing bracket hai, to stack.pop() karke check karo ki wo current bracket ka sahi joda hai ya nahi.
 * 4. Last mein agar stack khali hai, to Valid hai!
 */

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//     let stack=[];
//     for(let i=0;i<s.length;i++){
//         if(s[i]==='{' || s[i]==='[' || s[i]==='('){
//             stack.push(s[i]);
//         }
//         else{
//             let top= stack.pop();
//             if(!top || (top==="[" && s[i]!="]" ) || (top==="(" && s[i]!=")" ) || (top==="{" && s[i]!="}" )){
//                 return false;
//             }
//         }
//     }
//     return stack.length===0
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let map = {
        "(": ")",
        "[": "]",
        "{": "}",


    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        }
        else {
            let top = stack.pop();
            if (!top || s[i] !== map[top]) {
                return false;
            }
        }
    }
    return stack.length === 0
};