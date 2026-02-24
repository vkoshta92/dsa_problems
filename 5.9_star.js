/**
 * Question: 5.9_star (Pattern: Binary Triangle)
 * 
 * Explanation (Hinglish):
 * Ye 5.8 jaisa hi hai, bas switch (toggle) ka logic check karna hai. 
 * Har line ke liye 0/1 ka pattern Stairs ki tarah badhta rehta hai.
 * 
 * Logic:
 * 1. Loop `i` (lines).
 * 2. Loop `j` (inner): toggle number variable use karke 1 aur 0 chapo.
 * 
 * Complexity:
 * - Time Complexity: O(n^2) - nested loops.
 * - Space Complexity: O(n) - row string storage.
 */

function binaryTriangle(n) {
    let isSwitch = 1;
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < i + 1; j++) {
            row += isSwitch;
            isSwitch = (isSwitch === 1) ? 0 : 1;
        }
        console.log(row);
    }
}

console.log("Binary Triangle Pattern (6 rows):");
binaryTriangle(6);