// https://leetcode.com/problems/remove-element/submissions/1749293812/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   let len= s.length;
   let halfLen= Math.floor(len/2)
    for (let i=0; i<halfLen;i++){
        // swap
        [s[i], s[len-1-i]]=[s[len-1-i],s[i]]
    }
    return s;
};