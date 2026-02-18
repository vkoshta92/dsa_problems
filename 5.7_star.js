/**
 * Question: 5.7_star (Pattern: Star Triangle with Spaces)
 * 
 * Explanation (Hinglish):
 * Ye thoda tricky hai! Humein sitaron se pehle khali jagah (spaces) deni padegi taki triangle beech mein dikhe ya right side pe shift ho jaye. 
 * Pehle spaces ka loop, phir stars ka loop.
 * 
 * Logic:
 * 1. Loop `i` (lines).
 * 2. Pehla andar wala loop `j` khali spaces chapta hai (jitni kam line, utni zyada spaces).
 * 3. Dusra andar wala loop `k` sitara chapta hai.
 */

let n = 5;

for (let i = 0; i < 5; i++) {
    let row = " ";
    for (j = 0; j < n - (i + 1); j++) {  // for empty space
        row = row + "   "
    }
    for (k = 0; k < i + 1; k++) { // for usual peint 1 2 3 4 5 star
        row = row + " * "
    }
    console.log(row);
}