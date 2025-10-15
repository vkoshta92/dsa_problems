// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
//     s= s.trim();
//     s= s.split(" "); // array
//    return s[s.length-1].length;

// trim all spaces , piche side se chlenge remove krenge spaces
let n= s.length-1;
while(n>=0){
    if(s[n] !== " "){
        break;
    }
   --n;
}

// n is the point where ,my last  word starts ab count start krenge
let count = 0;
while(n>=0){
   if(s[n] === " ") break;
    
    --n;
    ++count;
  
    
}
//
return count;

};