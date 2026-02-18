/**
 * Question: 18_rec_sumOfN (Recursion: Sum of N numbers)
 * 
 * Explanation (Hinglish):
 * Humein N se lekar 1 tak ke saare numbers ka sum nikalna hai recursion use karke. 
 * Socho agar mujhe 5 tak ka sum chahiye, to main 5 ko bolunga "Tu ruk, main 4 tak ka sum nikal ke lata hoon aur tujhme jod dunga". 
 * Aise hi chota hote hote jab 0 aayega, tab hum ruk jayenge.
 * 
 * Logic:
 * 1. Base case: Agar `n` 0 hai, to sum 0 return karo.
 * 2. Recursive step: `n + sum(n-1)` return karo.
 */
function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}
console.log(sum(6));