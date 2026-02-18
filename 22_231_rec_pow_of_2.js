/**
 * Question: 22_231_rec_pow_of_2 (Recursion: Check if a number is power of 2)
 * 
 * Explanation (Hinglish):
 * Humein check karna hai ki koi number 2 ki power mein aata hai ya nahi (jaise 2, 4, 8, 16...).
 * Iska simple tarika hai: Number ko 2 se divide karte jao recursion mein. 
 * Agar divide karte karte exact 1 aa jaye, to matlab haan, power of 2 hai. 
 * Agar beech mein odd number aa jaye ya 1 se chota ho jaye, to matlab nahi hai.
 * 
 * Logic:
 * 1. Base case: Agar `n` 1 hai, to true return karo.
 * 2. Base case: Agar `n` 1 se chota hai ya odd hai, to false return karo.
 * 3. Recursive step: `isPowerOfTwo(n/2)` check karo.
 */
var isPowerOfTwo = function (n) {
    if (n === 1) return true;
    else if (n < 1 || n % 2 !== 0) return false;

    return isPowerOfTwo(n / 2)
};