/**
 * Question: 21_rec_factorial (Recursion: Factorial of a number)
 * 
 * Explanation (Hinglish):
 * Factorial matlab kisi number ka usse chote saare numbers ke saath guna (multiply) karna. 
 * Jaise 5! = 5 * 4 * 3 * 2 * 1. 
 * Recursion mein hum kehte hain: "5 ka factorial chahiye to 5 ko 4 ke factorial se multiply kar do".
 * 
 * Logic:
 * 1. Base case: Agar `n` 1 hai, to 1 return karo (kyunki 1! = 1).
 * 2. Recursive step: `n * fact(n-1)` return karo.
 */
function fact(n) {
    if (n === 1) return 1;
    return n * fact(n - 1);
}
console.log(fact(5));