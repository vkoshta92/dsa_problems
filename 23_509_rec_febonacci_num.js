/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<=1) return n;
    return fib(n-1)+fib(n-2);
};
//  2 rabit every month duble   after n month how much rabbit ?
// ans- fibinacci 

// time complexity- O(2^n)
// improve time complexity in dynamic programing.