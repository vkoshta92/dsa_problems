// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let x=0; // for tracking
    while(x<strs[0].length){
        let ch= strs[0][x];
        for(let i=1;i<strs.length;i++){
            if(ch != strs[i][x] || x=== strs[i].length){
  // break if one condition is true
            return strs[0].substring(0,x);
            }
          
        }
        ++x;
    }
   return strs[0]
};

// T- O(s)  sis sum of all string
// S=O(1)