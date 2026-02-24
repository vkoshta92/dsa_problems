/**
 * Question: 5.6_star (Pattern: Inverted Star Triangle)
 * 
 * Explanation (Hinglish):
 * Ulata triangle sitaron ke sath. 
 * Pehli line mein sabse zyada sitare, aakhri mein sirf ek. 
 * Hum loop ko aise set karte hain ki har line mein `n - i` stars hi aayein.
 * 
 * Logic:
 * 1. Loop `i` (lines).
 * 2. Loop `j` (stars): 0 se `n - i` tak stars append karo.
 * 
 * Complexity:
 * - Time Complexity: O(n^2) - nested loops.
 * - Space Complexity: O(n) - row string storage.
 */

function invertedStarTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n - i; j++) {
            row += " * ";
        }
        console.log(row);
    }
}

console.log("Inverted Star Triangle Pattern (5 rows):");
invertedStarTriangle(5);