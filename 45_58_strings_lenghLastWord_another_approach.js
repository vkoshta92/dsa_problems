// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let n= s.length-1;
   let count=0;
   while(n>=0){
      if(s[n] !== " "){ // is space found
        ++count;
    }
    else if(count>0){  // if found space and count 0 se jyda h mesns word mil gya to vhi count ho jega vhi break ho jega.
break;
    }
    --n;
  
    
   }
   return count;
};

// T=O(n)
//S=O(1)