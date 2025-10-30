// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let temp=0;
    let count=0;
   for (let i=0;i<s.length;i++){
   
    if(s[i]==="R"){
        temp++;
    }
    if(s[i]==="L"){
        temp--;
    }
    if(temp==0){
        ++count;
    }
   }
    return count;
};

// T-O(n);
//S-O(1)

// var balancedStringSplit = function(s) {
//     let R=0;
//     let L=0;
//     let count=0;
//     for(let i=0;i<s.length;i++){
//         if(s[i]=== "R"){
//             ++R;
//         }
//         else{
//             ++L;
//         }

//         if(R===L){
//             count++;
//             R=0;
//             L=0;
//         }
//     }
//     return count;
    
// };