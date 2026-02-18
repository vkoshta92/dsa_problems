/**
 * Question: 23_509_rec_febonacci_num (Recursion: Fibonacci number)
 * 
 * Explanation (Hinglish):
 * Fibonacci series matlab wo series jisme agla number pichle do numbers ka jod (sum) hota hai.
 * 0, 1, 1, 2, 3, 5, 8...
 * Humein N-th number nikalna hai. Hum recursion se bolte hain: "Pichle do numbers ka fibonacci nikal ke unhe jod do".
 * 
 * Logic:
 * 1. Base case: Agar `n` 0 ya 1 hai, to `n` hi return karo.
 * 2. Recursive step: `fib(n-1) + fib(n-2)` return karo.
 */
var fib = function (n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};
//  2 rabit every month duble   after n month how much rabbit ?
// ans- fibinacci

// time complexity- O(2^n)
// improve time complexity in dynamic programing.