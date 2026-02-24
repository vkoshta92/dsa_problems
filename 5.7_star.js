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
 * 
 * Complexity:
 * - Time Complexity: O(n^2) - nested loops.
 * - Space Complexity: O(n) - row string storage.
 */

function shiftedStarTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        // Spaces
        for (let j = 0; j < n - (i + 1); j++) {
            row += "   ";
        }
        // Stars
        for (let k = 0; k < i + 1; k++) {
            row += " * ";
        }
        console.log(row);
    }
}

console.log("Shifted Star Triangle Pattern (5 rows):");
shiftedStarTriangle(5);